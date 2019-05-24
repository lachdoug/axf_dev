class Server
  module App
    module Helpers

      def parent_path( path )

        path.sub( /\/[^\/]+$/, '' )

      end

    end
  end
end
