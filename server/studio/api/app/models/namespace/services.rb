module Server
  class Api
    module App
      module Models
        class Namespace
          class Services

            def initialize( namespace )
              @namespace = namespace
            end

            attr_reader :namespace

            def find( id )
              Service.new namespace.id, id
            end

            def to_h
              all.map do |service|
                {
                  id: service.id,
                  name: service.name,
                  active: service.active,
                  # remote: repo.remote,
                  # branch: repo.branch,
                  # readme: repo.readme,
                }
              end
            end

            def to_json
              to_h.to_json
            end

            def count
              all.count
            end

            def data_dir
              @data_dir ||= "data/workspaces/#{ namespace.id }/services"
            end

            def all
              @all ||= Dir.glob( "#{ data_dir }/*" ).map do |entry_path|
                id = entry_path.sub( "#{ data_dir }/", '' )
                Service.new( namespace.id, id )
              end.sort_by do |service|
                service.name
              end
            end

            def create( params )
              raise Error::MissingParam.new ':url' if params[:url].to_s.empty?
              id = Repo.create  url: params[:url],
                                path: data_dir
                                # ,
                                # namespace: namespace.name
              { id: id }
            end

            def active
              to_h.select do |service|
                service[:active]
              end
            end

          end



        end
      end
    end
  end
end
