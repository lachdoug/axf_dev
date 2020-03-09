module Server
  class Api
    module App
      module Models
        class Workspace
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

              def parent_dir
                "#{ definitions.path }/#{ type }"
              end

              def path
                "#{ parent_dir }/#{ name }.yaml"
              end

              def name
                @name ||= type.match( /(\w+)$/ )[1]
              end

              def save( object )
                FileUtils.mkdir_p parent_dir
                File.write path, object.transform_keys( &:to_s ).to_yaml
              end

              def object
                @object ||= load_object
              end

              def load_object
                YAML.load_file( path ).transform_keys &:to_sym
              rescue Errno::ENOENT
                {}
              end

              def delete
                definitions.delete type
              end

            end
          end
        end
      end
    end
  end
end
