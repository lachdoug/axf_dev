module Server
  class Api
    module App
      module Models
        class Engines

          require 'rest-client'

          def initialize( ip_address, token, logger )
            @ip_address = ip_address
            @token = token
            @logger = logger
          end

          attr_reader :logger, :token

          def get( route, options={} )
            api_call route, options
          end

          def post( route, payload, options={} )
            api_call route,
              method: :post,
              payload: payload,
              **options
          end

          def delete( route, options={} )
            api_call route,
              method: :delete,
              **options
          end

          def post_api_vars( route, api_vars, options={} )
            payload = { 'api_vars': api_vars }.to_json
            post route, payload, options
          end

          def stream_chunks( route, &block )
            block_response = asChunks &block
            api_call( route, block_response: block_response )
          end

          def stream_lines( route, &block )
            block_response = asLines &block
            api_call( route, block_response: block_response )
          end

          private

          def asChunks
            Proc.new do |response|
              response.read_body do |chunk|
                # debugger
                yield chunk
              end
            end
          end

          def asLines
            Proc.new do |response|
              response.read_body do |chunk|
                chunk.split("\n").each do |line|
                  yield line
                end
              end
            end
          end


          def api_call( route, options={} )


                      # debugger



            response_for do
              RestClient::Request.execute(
                method: options[:method] || :get,
                url: url_for( route ),
                payload: options[:payload] || nil,
                timeout: options[:timeout] || 120,
                verify_ssl: false,
                headers: {
                  content_type: options[:content_type] || :json,
                  access_token: @token
                },
                block_response: options[:block_response]
              )
            end
          end

          def url_for( route, options={} )
            "https://#{@ip_address}:2380/v0#{route}"
            # .tap do |url|
            #   if options[:query]
            #     query_params = options[:query]
            #     query_string = URI.encode_www_form query_params
            #     url = "#{ url }?#{ query_string }"
            #   end
            # end
          end

          def response_for( &block )
            yield
          rescue RestClient::Forbidden
            raise Error::NotAuthenticated
          rescue RestClient::NotFound => e
            raise Error::SystemNotFound.new e.response.request
          rescue  Errno::EHOSTUNREACH,
                  Errno::ECONNREFUSED,
                  Errno::ECONNRESET,
                  OpenSSL::SSL::SSLError,
                  RestClient::ServerBrokeConnection,
                  RestClient::Exceptions::OpenTimeout,
                  RestClient::Exceptions::ReadTimeout
            raise Error::SystemUnavailable
          end

        end
      end
    end
  end
end
