class Server
  module App
    module Helpers

      def new_file( dir_path, file_config )

        {
          type: :new_file,
          path: "#{ dir_path }/~dir",
          key: file_config[:key],
          index: file_config[:index],
          description: file_config[:description],
          # config: file_config
        }

      end

    end
  end
end
