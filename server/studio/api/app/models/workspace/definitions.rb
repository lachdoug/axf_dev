module Server
  class Api
    module App
      module Models
        class Workspace
          class Definitions

            def initialize( workspace )
              @workspace = workspace
            end

            attr_reader :workspace

            def namespace
              workspace.namespace
            end

            def find( type )
              Definition.new self, type
            end

            def path
              workspace.repo_dir
            end

            def to_json
              to_a.to_json
            end

            def to_a
              all.map do |definition|
                { type: definition.type }
              end
            end

            def delete( type )
              workspace.repo.delete type
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
