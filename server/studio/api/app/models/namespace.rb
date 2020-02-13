module Server
  class Api
    module App
      module Models
        class Namespace

          def self.to_json
            to_h.to_json
          end

          def self.to_h
            all.map do |namespace|
              {
                name: namespace.name,
                id: namespace.id,
                # services: {
                #   count: namespace.services.count,
                #   active: namespace.services.active,
                # },
              }
            end
          end

          def self.count
            all.count
          end

          def self.all
            Dir.glob( "#{ data_dir }/*" ).map do |entry_path|
              id = entry_path.sub( "#{ data_dir }/", '' )
              new id
            end.sort_by do |namespace|
              namespace.name
            end
          end

          def self.data_dir
            'data/namespaces'
          end

          def self.create( params )
            raise Error::MissingParam.new ':url' if params[:url].to_s.empty?
            id = Repo.create  url: params[:url],
                              path: data_dir
            { id: id }
          end

          def self.find( id )
            new id
          end

          def self.lookup name
            all.find do |namespace|
              namespace.name == name
            end
          end

          def initialize( id )
            @id = id
          end

          attr_reader :id

          def to_json
            to_h.to_json
          end

          def to_h
            {
              id: id,
              name: name,
              remote: repo.remote,
              branch: repo.branch.current,
              # readme: readme.content,
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

          def name
            raise Error::NoRecord.new id unless parent_dir
            @name ||= repo_dir.sub( "#{ parent_dir }/", '' )
          end

          def parent_dir
            @parent_dir ||= "#{ self.class.data_dir }/#{ id }"
          end

          def repo_dir
            @repo_dir ||= Dir.glob( "#{ parent_dir }/*" )[0]
          end

          def workspace
            Workspace.new( self )
          end

          def services
            Services.new( self )
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
