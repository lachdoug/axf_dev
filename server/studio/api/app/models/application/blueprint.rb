module Server
  class Api
    module App
      module Models
        class Application
          class Blueprint

            def initialize( application )
              @application = application
            end

            attr_reader :application

            def to_h
              {
                object: object,
              }
            end

            def to_json
              to_h.to_json
            end

            def content
              application.repo.read 'blueprint.json'
            rescue Errno::ENOENT
              return '{}'
            end

            def update( io )
              application.repo.write 'blueprint.json', io.read
              return 'Success'
            end

            def object
              @object ||= JSON.parse content, symbolize_names: true
            rescue => e
              raise Error::JsonParse.new( e.message )
            end


            #
            # def blueprint
            #   @blueprint ||= JSON.parse( blueprint_json )
            # rescue JSON::ParserError => e
            #   raise Error::JsonParse.new e.message
            # end

          end
        end
      end
    end
  end
end
