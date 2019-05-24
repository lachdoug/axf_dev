class Server
  module App
    module Helpers

      def eq8r_config( path )

        YAML.load_file( "data/#{ path }/eq8r.config" )

      rescue Errno::ENOENT

        {}

      end

    end
  end
end
