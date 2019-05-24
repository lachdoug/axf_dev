class Server
  module App
    module Helpers

      def create_client( client )

        name = client[:name]

        raise ApiError.new( {
          error: "Client requires name.",
          status: 409
        } ) unless name

        create_directory( "data/clients/#{ name }" )

        { client: client_item( name ) }

      rescue Errno::EEXIST

        raise ApiError.new( {
          error: "#{ name } already exists.",
          status: 409
        } )

      end

    end
  end
end
