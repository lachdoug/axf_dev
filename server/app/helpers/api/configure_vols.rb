class Server
  module App
    module Helpers

      def configure_vols( vols_config )

        vols_config.each do |vol_config|
          root = vol_config[:key]
          configure_static_dir_routes  "/api", vol_config
          build_static_dirs root, vol_config
        end
        
      end

    end
  end
end
