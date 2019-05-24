class Server
  module App
    module Helpers

      def update_raw_file( behavior, file_path, file_config, file_params )

        entry_path = "volumes/#{ file_path }"

        write_file entry_path, file_params[:contents]

        {
          type: :update_raw_file,
          path: "#{ file_path }/~file"
        }

      end

    end
  end
end
