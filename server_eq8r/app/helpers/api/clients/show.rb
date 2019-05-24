class Server
  module App
    module Helpers

      def client( name )

        controllers = list_directories "data/clients/#{ name }"

        {
          client: {
            name: name,
            controllers: controllers.map { |name| { name: name } },
          }
        }

      rescue Errno::ENOENT

        raise ApiError.new( {
          error: "#{ name } does not exist.",
          status: 409
        } )

      end

    end
  end
end
