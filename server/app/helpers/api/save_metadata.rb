class Server
  module App
    module Helpers

      def save_metadata( path, metadata )

        write_file( "volumes/#{ path }/.erm.metadata", metadata.to_yaml )

      end

    end
  end
end
