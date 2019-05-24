class Server
  module App
    module Helpers

      def new_directory( dir_path, dir_config )

        {
          type: :new_dir,
          path: "#{ dir_path }/~dir",
          key: dir_config[:key],
          index: dir_config[:index],
          description: dir_config[:description],
          # config: dir_config
        }

      end

    end
  end
end
