class Server
  module App
    module Helpers

      def rename_directory( from, to )

        File.rename from, to
        
      end

    end
  end
end
