class Server
  module App
    module Helpers

      def delete_directory( dir_path, dir_config )

        name = dir_path.split('/').last

        {
          type: :delete_dir,
          name: name,
          path: "#{ dir_path }/~dir",
          key: dir_config[:key],
          # config: dir_config
        }

      end

    end
  end
end
