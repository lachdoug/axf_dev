class Server
  module App
    module Helpers

      def destroy_directory( dir_path, dir_config )

        dir_id = entry_id "volumes/#{ dir_path }"

        remove_entry "volumes/#{ dir_path }"

        parent_path = parent_path( dir_path )
        metadata = load_metadata parent_path
        metadata.delete( dir_id )
        save_metadata parent_path, metadata

        {
          type: :delete_dir,
          path: "#{ parent_path( dir_path ) }/~dir"
        }

      end
    end
  end
end
