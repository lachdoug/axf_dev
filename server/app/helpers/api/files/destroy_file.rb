class Server
  module App
    module Helpers

      def destroy_file( file_path, file_config )

        file_id = entry_id "volumes/#{ file_path }"

        remove_entry "volumes/#{ file_path }"

        dir_path = parent_path( file_path )
        metadata = load_metadata dir_path
        metadata.delete( file_id )
        save_metadata dir_path, metadata

        {
          type: :delete_file,
          path: "#{ dir_path }/~dir",
          # key: file_config[:key],
        }

      end
    end
  end
end
