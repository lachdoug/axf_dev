module Server
  class Api
    module App
      module Models
        class Service

          def initialize( workspace, id )
            @workspace = workspace
            @id = id
          end

          attr_reader :workspace, :id

          def to_json
            to_h.to_json
          end

          def to_h
            {
              id: id,
              name: name,
              namespace: workspace.namespace.name,
              remote: repo.remote,
              branch: repo.branch.current,
              active: active?,
            }
          end

          def repo
            @repo ||= Repo.new( self )
          end

          def readme
            @readme ||= Readme.new( self )
          end

          def license
            @license ||= License.new( self )
          end

          def blueprint
            @blueprint ||= Blueprint.new( self )
          end

          def definition
            @definition ||= Definition.new( self )
          end

          def parent_dir
            @parent_dir ||= "data/workspaces/#{ workspace.id }/services/#{ id }"
          end

          def name
            raise Error::NoRecord.new id unless parent_dir
            repo_dir.sub( "#{parent_dir}/", '' )
          end

          def repo_dir
            Dir.glob( "#{parent_dir}/*" )[0]
          end

          def active?
            repo.dirty?
          end

          def delete
            FileUtils.rm_rf parent_dir
            {}
          end

        end
      end
    end
  end
end
