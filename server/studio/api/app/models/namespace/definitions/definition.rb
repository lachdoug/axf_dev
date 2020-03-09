module Server
  class Api
    module App
      module Models
        class Namespace
          class Definitions

            class Definition

              def initialize( definitions, type )
                @definitions = definitions
                @type = type
              end

              attr_reader :definitions, :type

              def to_json
                to_h.to_json
              end

              def to_h
                {
                  type: type,
                  object: object,
                }
              end

              def path
                @path ||= "#{ definitions.path }/#{ type }/#{ name }.yaml"
              end

              def name
                @name ||= type.match( /(\w+)$/ )[1]
              end

              # def content
              #   File.read path
              # end

              def object
                @object ||= YAML.load_file( path ).transform_keys(&:to_sym)
              end

            end

          end
        end
      end
    end
  end
end
