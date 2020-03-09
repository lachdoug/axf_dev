module Server
  class Api
    module App
      module Models
        class Namespace
          class Definitions

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
              to_a.to_json
            end

            def to_a
              all.map do |definition|
                { type: definition.type }
              end
            end

            def lookup( type )
              all.find { |definition| definition.type === type }
            end

            # def to_a
            #   all.map do |definition|
            #     definition.to_h
            #   end
            # end

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
