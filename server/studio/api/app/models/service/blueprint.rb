module Server
  class Api
    module App
      module Models
        class Service
          class Blueprint

            def initialize( owner )
              @owner = owner
            end

            attr_reader :owner

            def to_h
              {
                # branch: owner.repo.branch.current,
                content: content,
              }
            end

            def to_json
              to_h.to_json
            end

            def content
              owner.repo.read 'blueprint.json'
            rescue Errno::ENOENT
              return '{}'
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
