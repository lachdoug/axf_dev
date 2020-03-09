module Server
  class Api
    module App
      module Models
        class Workspace
          class Services

            def initialize( workspace )
              @workspace = workspace
            end

            attr_reader :workspace

            def find( id )
              Service.new workspace, id
            end

            def to_a
              all.map do |service|
                {
                  id: service.id,
                  name: service.name,
                  active: service.active?,
                }
              end
            end

            def to_json
              to_a.to_json
            end

            def active
              to_a.select do |service|
                service[:active]
              end
            end

            def count
              all.count
            end

            def data_dir
              @data_dir ||= "data/workspaces/#{ workspace.id }/services"
            end

            def all
              @all ||= Dir.glob( "#{ data_dir }/*" ).map do |entry_path|
                id = entry_path.sub( "#{ data_dir }/", '' )
                Service.new workspace, id
              end.sort_by do |service|
                service.name
              end
            end

            def create( params )
              raise Error::MissingParam.new ':url' if params[:url].to_s.empty?
              id = Repo.create url: params[:url], path: data_dir
              branch = Service.new( workspace, id ).repo.branch.current
              {
                id: id,
                branch: branch,
              }
            end

          end



        end
      end
    end
  end
end
