class Server
  module App
    module Helpers

      def list_directories( path )

        Dir.chdir( path ) do

          Dir.glob('*').
            select { |f| File.directory? f }.
            map { |directory| directory.split('/').last }

        end

      end

    end
  end
end
