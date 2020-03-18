module Server
  class Api

    class Error < StandardError

      def to_s
        message
      end

      def content_type
        :text
      end

      class NotAuthenticated < Error

        def message
          "Not authenticated."
        end

        def status
          401
        end

      end


      class RepoAlreadyExists < Error

        def initialize( repo_name )
          @repo_name = repo_name
        end

        def message
          "Repo '#{ @repo_name }' already exists."
        end

        def status
          400
        end

      end

      class RepoRequiresBranch < Error

        def initialize( repo_name )
          @repo_name = repo_name
        end

        def message
          "Repo '#{ @repo_name }' requires a branch."
        end

        def status
          400
        end

      end

      class RepoCloneFailed < Error

        def initialize( message )
          @message = message
        end

        def message
          "Failed to clone repo.\n\n#{ @message }"
        end

        def status
          400
        end

      end

      class NoRecord < Error

        def initialize( record )
          @record = record
        end

        def message
          "No record for '#{ @record }'."
        end

        def status
          400
        end

      end


      class GitError < Error

        def initialize( message )
          @message = message
        end

        def message
          "Git error.\n\n#{ @message }"
        end

        def status
          400
        end

      end

      class JsonParse < Error

        def initialize( message )
          @message = message
        end

        def message
          "Failed to parse JSON.\n#{ @message }"
        end

        def status
          400
        end

      end

      class MissingParam < Error

        def initialize( params_list )
          @params_list = params_list
        end

        def message
          "Missing parameter.\nExpects #{ @params_list }."
        end

        def status
          400
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

    end

    not_found do
      content_type :text
      status 404
      "Server 404. Route not found: #{ request.request_method } '#{ request.path_info }'."
    end

    error Error do |e|
      content_type e.content_type
      status e.status
      e.message
    end

    error do |e|
      message = "\033[1;31mFatal error.\033[0m\n#{ e.full_message }\033[1;31m#{ e }\033[0m"
      logger.error message
      content_type 'text/terminal'
      status 500
      message
    end

  end
end
