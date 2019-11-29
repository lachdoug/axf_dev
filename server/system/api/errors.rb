module Server
  class Api

    class Error < StandardError

      def to_s
        message
      end

      class NotAuthenticated < Error

        def message
          "Not authenticated."
        end

        def status
          401
        end

      end

      class Timeout < Error

        def message
          "Session timeout."
        end

        def status
          418 # Use 418 for timeout, because teapots are always on time.
        end

      end

      class SystemUnavailable < Error

        def message
          "System unavailable."
        end

        def status
          503
        end

      end

      class SystemApiWarning < Error

        def initialize(e)
          @headers = e.http_headers
          @body = e.http_body
        end

        def message
          if @headers[:content_type] == 'application/json'
            object = JSON.parse( @body, symbolize_names: true )[:error_object] || {}
            message = object[:error_mesg]
          end
          message || 'Unspecified Engines System API Error.'
        end

        def status
          400
        end

      end

      class System404 < Error

        def initialize(e)
          @request = e.response.request
        end

        def message
          "Engines System API route not found: #{
            @request.method.upcase
          } '#{
            URI.parse( @request.url ).path
          }'."
        end

        def status
          500
        end

      end

      class System500 < Error

        def initialize(e)
          @body = e.http_body
        end

        # def full_message
        #   message
        # end
        #
        def message
          "Engines System API server error:\n'#{
            JSON.parse( @body ).to_yaml
          }'."
        end

        def status
          500
        end

      end


    end

    not_found do
      content_type :text
      status 404
      "Server 404. Route not found: #{ request.request_method } '#{ request.path_info }'."
    end

    error Error do |e|
      content_type :text
      status e.status
      e.message
    end

    error do |e|
      message = "\033[1;31mError.\033[0m\n#{ e.full_message }\033[1;31m#{ e }\033[0m"
      logger.error message
      content_type 'text/terminal'
      status 500
      message
    end

  end
end
