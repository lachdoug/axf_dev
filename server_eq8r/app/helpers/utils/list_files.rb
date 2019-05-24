class Server
  module App
    module Helpers

      def list_files( path )

        Dir.glob( [ path ] ).
          select { |file| File.file?(file) }

      end

    end
  end
end
