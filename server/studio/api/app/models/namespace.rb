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
                services: {
                  count: namespace.services.count,
                  active: namespace.services.active,
                },
              }
            end
          end

          def self.count
            all.count
          end

          def self.all
            Dir.glob( "#{ path }/*" ).map do |entry_path|
              id = entry_path.sub( "#{ path }/", '' )
              new id
            end.sort_by do |namespace|
              namespace.name
            end
          end

          def self.path
            'data/namespaces'
          end

          def self.create( params )
            raise Error::MissingParam.new ':url' if params[:url].to_s.empty?
            id = Repo.create url: params[:url],
                        path: path
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
              branch: repo.branch.current,
              readme: readme.content,
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
            raise Error::NoRecord.new id unless project_dir
            @name ||= Dir.glob( "#{path}/*" )[0].sub( "#{path}/", '' )
          end

          def project_dir
            Dir.glob( "#{path}/*" )[0]
          end

          def path
            @path ||= "#{ self.class.path }/#{ id }"
          end

          def services
            Services.new( self )
          end

          def delete
            FileUtils.rm_rf path
            {}
          end

        end
      end
    end
  end
end
