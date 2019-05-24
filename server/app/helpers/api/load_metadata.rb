class Server
  module App
    module Helpers

      def load_metadata( path )

        load_yaml( "volumes/#{ path }/.erm.metadata" )

      rescue Errno::ENOENT

        {}

      end

    end
  end
end
