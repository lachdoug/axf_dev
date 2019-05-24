class Server
  module App
    module Helpers

      def update_client( name, client )

        new_name = params[:client][:name]

        raise ApiError.new( {
          error: "Client requires name.",
          status: 409
        } ) unless new_name

        rename_directory( "data/clients/#{ name }", "data/clients/#{ new_name }" )

        { client: client_item( new_name ) }

      rescue Errno::EEXIST

        raise ApiError.new( {
          error: "#{ name } does not exist.",
          status: 404
        } )

      end

    end
  end
end
