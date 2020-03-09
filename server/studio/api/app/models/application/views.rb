module Server
  class Api
    module App
      module Models
        class Application
          class Views

            def initialize( application )
              @application = application
            end

            attr_reader :application

            def to_a
              @to_a ||= JSON.parse content, symbolize_names: true
            end

            def to_json
              to_a.to_json
            end

            def find( name )
              to_h.find do |view|
                view[:name] == name
              end
            end

            def content
              application.repo.read 'views.json'
            rescue Errno::ENOENT
              return '[]'
            end

            def create( view )
              @to_h = to_h.push( view )
              save
              { name: view[:name] }
            end

            def update( name, view )
              raise Error::MissingParam.new ':name' if name.to_s.empty?
              index = to_h.each_with_index.select { |view,i| view[:name] == name }.map(&:last)[0]
              @to_h[index] = view
              save
              { name: view[:name] }
            end

            def save
              application.repo.write 'views.json', JSON.pretty_generate( to_h )
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
