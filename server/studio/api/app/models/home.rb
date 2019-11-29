module Server
  class Api
    module App
      module Models
        class Home

          # def initialize( current_user )
          #   @current_user = current_user
          # end

          def to_json
            to_h.to_json
          end

          def to_h
            {
              applications: {
                count: Application.count,
                active: Application.active,
              },
              namespaces: Namespace.to_h,
              # git_user: @settings.git_username
            }
          end

        end
      end
    end
  end
end
