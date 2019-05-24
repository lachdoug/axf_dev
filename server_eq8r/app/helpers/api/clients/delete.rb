class Server
  module App
    module Helpers

      def delete_client( name )

        delete_directory "data/clients/#{ name }"

        {}

      rescue Errno::ENOENT

        raise ApiError.new( {
          error: "#{ name } does not exist.",
          status: 404
        } )

      rescue Errno::ENOTEMPTY

        raise ApiError.new( {
          error: "#{ name } has dependents.",
          status: 409
        } )

      end

    end
  end
end
