module Server
  class Api
    module App
      module Models
        class Settings

          def initialize( current_user )
            @current_user = current_user
            @consumable_namespaces = ConsumableNamespaces.new
          end

          def to_json
            to_h.to_json
          end

          def to_h
            {
              public_key: @current_user.public_key,
              consumable_namespaces: @consumable_namespaces.to_a,
            }
          end

        end
      end
    end
  end
end
