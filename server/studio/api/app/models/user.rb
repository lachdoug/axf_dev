module Server
  class Api
    module App
      module Models
        class User

          def initialize( settings, session )
            @settings = settings
            @session = session
          end

          def to_s
            'user'
          end

          def authenticate!
            raise Error::NotAuthenticated unless File.exist? filepath
            raise Error::Timeout unless within_timeout
            reset_timeout
            return self
          end

          def logout!
            File.delete( filepath ) if File.exist? filepath
            return ''
          end

          def login( password )
            raise Error::NotAuthenticated unless @settings.user_password == password
            reset_timeout
            return self
          end

          def public_key
            File.read public_key_filepath
          end

          def private_key_filepath
            "#{ Dir.home }/.ssh/#{ @settings.ssh_private_key_filename }"
          end

          def public_key_filepath
            "#{ Dir.home }/.ssh/#{ @settings.ssh_public_key_filename }"
          end

          def session_timeout_seconds
            @settings.session_timeout_seconds
          end

          def within_timeout
            last_activity_at = timestamp
            return false unless last_activity_at
            last_activity_at + session_timeout_seconds > Time.now
          end
          
          private

          def filepath
            "sessions/#{ @session[:session_id] }"
          end

          def timestamp
            File.mtime filepath
          end

          def reset_timeout
            FileUtils.touch filepath
          end

        end
      end
    end
  end
end

# module Server
#   class Api
#     module App
#       module Helpers
#
#         require 'fileutils'
#
#         def preauth
#           raise Error::NotAuthenticated unless api_token
#           raise Error::Timeout unless within_timeout
#           set_timeout
#         end
#
#         def preauth_or_redirect
#           preauth
#         rescue Error::NotAuthenticated, Error::Timeout
#           redirect '/'
#         end
#
#         def within_timeout
#           last_activity_at = auth_timestamp
#           return false unless last_activity_at
#           last_activity_at + settings.session_timeout_seconds > Time.now
#         end
#
#         def auth_timestamp
#           File.mtime auth_filepath
#         end
#
#         def set_timeout
#           FileUtils.touch auth_filepath
#         end
#
#         def api_token
#           File.read auth_filepath
#         rescue Errno::ENOENT
#         end
#
#         def save_api_token( token )
#           File.write auth_filepath, token
#         end
#
#         def reset_preauth
#           File.delete( auth_filepath ) if File.exist? auth_filepath
#         end
#
#         def auth_filepath
#           "sessions/#{ session[:session_id] }"
#         end
#
#       end
#     end
#   end
# end
