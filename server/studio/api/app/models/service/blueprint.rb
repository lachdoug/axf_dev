module Server
  class Api
    module App
      module Models
        class Service
          class Blueprint

            def initialize( service )
              @service = service
            end

            attr_reader :service

            def to_h
              {
                object: object,
              }
            end

            def to_json
              to_h.to_json
            end

            def content
              service.repo.read 'blueprint.json'
            rescue Errno::ENOENT
              return '{}'
            end

            def update( io )
              service.repo.write 'blueprint.json', io.read
              return 'Success'
            end

            def object
              @object ||= JSON.parse content, symbolize_names: true
            rescue => e
              raise Error::JsonParse.new( e.message )
            end

            def type
              object.dig :software, :base, :type_path
            end

          end
        end
      end
    end
  end
end
