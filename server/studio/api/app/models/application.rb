module Server
  class Api
    module App
      module Models
        class Application

          def self.to_json
            to_h.to_json
          end

          def self.to_h
            all.map do |application|
              {
                id: application.id,
                name: application.name,
                active: application.active?
              }
            end
          end

          def self.count
            all.count
          end

          def self.all
            Dir.glob( "#{ data_dir }/*" ).map do |entry_path|
              id = entry_path.sub( "#{ data_dir }/", '' )
              new( id )
            end.sort_by do |application|
              application.name
            end
          end

          def self.active
            to_h.select do |application|
              application[:active]
            end
          end

          def self.create( params )
            raise Error::MissingParam.new ':url' if params[:url].to_s.empty?
            id = Repo.create url: params[:url], path: data_dir
            branch = new( id ).repo.branch.current
            {
              id: id,
              branch: branch,
            }
          end

          def self.data_dir
            'data/applications'
          end

          def self.find( id )
            new id
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

          def views
            @views ||= Views.new( self )
          end

          def parent_dir
            @parent_dir ||= "#{ self.class.data_dir }/#{ id }"
          end

          def name
            raise Error::NoRecord.new id unless parent_dir
            repo_dir.sub( "#{ parent_dir }/", '' )
          end

          def repo_dir
            Dir.glob( "#{ parent_dir }/*" )[0]
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
