class Server
  module App
    module Helpers

      def is_file_route( path )

        File.file? "volumes/#{ path }"

      end

    end
  end
end
