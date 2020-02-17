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
                  content: content,
                }
              end

              def path
                @path ||= "#{ definitions.path }/#{ type }/#{ name }.yaml"
              end

              def name
                @name ||= type.match( /(\w+)$/ )[1]
              end

              def content
                File.read path
              end

            end

            def initialize( namespace )
              @namespace = namespace
            end

            attr_reader :namespace

            def find( type )
              Definition.new self, type
            end

            def path
              @path ||= "data/namespaces/#{ namespace.id }/#{ namespace.name }"
            end

            def to_json
              to_h.to_json
            end

            def to_h
              all.map do |definition|
                {
                  type: definition.type
                }
              end
            end

            def all
              @all ||= Dir.glob( "#{ path }/**/*.yaml" ).map do |entry_path|
                type = entry_path.sub( path, '' ).match( /\/(.+)\/\w+\.\w+$/ )[1]
                Definition.new self, type
              end.sort_by do |definition|
                definition.type
              end
            end

          end

        end
      end
    end
  end
end
