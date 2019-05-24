class Server
  module App
    module Helpers

      def write_file( filepath, content )

        File.write filepath, content
        
      end

    end
  end
end
