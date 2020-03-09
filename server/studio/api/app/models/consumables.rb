module Server
  class Api
    module App
      module Models
        module Consumables

          def self.namespaces
            Namespace.all.map do |namespace|
              namespace.name
            end
          end

          def self.namespace( namespace )
            Namespace.lookup( namespace ).definitions.all.map do |definition|
              definition.type
            end
          end

          def self.type( namespace, type )
            ( Namespace.lookup( namespace ).
                definitions.lookup( type ).
                object[:consumer_params] || {} ).values
          end

        end
      end
    end
  end
end
