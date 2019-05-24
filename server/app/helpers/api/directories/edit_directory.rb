class Server
  module App
    module Helpers

      def edit_directory( dir_path, dir_config )

        name = dir_path.split('/').last
        metadata = load_metadata parent_path( dir_path )
        id = entry_id "volumes/#{ dir_path }"

        {
          type: :edit_dir_meta,
          name: name,
          metadata: metadata[ id ] || {},
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
