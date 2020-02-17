module Server
  class Api
    module App
      module Models
        class Namespace
          class Workspace

            def initialize( namespace )
              @namespace = namespace
            end

            attr_reader :namespace

            def to_h
              exists? ?
              {
                exists: true,
                branch: repo.branch.current,
                remote: repo.remote,
                # services: namespace.services.to_h
              } :
              { exists: false }
            end

            def to_json
              to_h.to_json
            end

            def data_dir
              @data_dir ||= "data/workspaces/#{ namespace.id }/definitions"
            end

            def parent_dir
              @parent_dir ||= "#{ data_dir }/#{ namespace.id }"
            end

            def repo_dir
              @repo_dir ||= Dir.glob( "#{ parent_dir }/*" )[0]
            end

            def exists?
              File.exist? parent_dir
            end

            def create
              id = Repo.create  url: namespace.repo.remote,
                                path: data_dir
              { id: id }
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

            def services
              @services ||= Services.new( self )
            end

            def name
              raise Error::NoRecord.new id unless repo_dir
              @name ||= repo_dir.sub( "#{ parent_dir }/", '' )
            end

          end



        end
      end
    end
  end
end
