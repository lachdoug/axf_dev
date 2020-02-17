module Server
  class Api
    module App
      module Models
        class Home

          # def initialize( current_user )
          #   @current_user = current_user
          # end

          def self.to_json
            to_h.to_json
          end

          def self.to_h
            {
              applications: Application.active,
              namespaces: Namespace.all.map{ |namespace|
                {
                  id: namespace.id,
                  name: namespace.name,
                  services: namespace.workspace.services.active
                }
              },
            }
          end

        end
      end
    end
  end
end
