class Server
  module App
    module Helpers

      def delete_file( file_path, file_config )

        name = file_path.split('/').last

        {
          type: :delete_file,
          name: name,
          path: "#{ file_path }/~file",
          key: file_config[:key],
        }

      end

    end
  end
end
