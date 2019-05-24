class Server
  module App
    module Helpers

      def edit_file( file_path, file_config )

        name = file_path.split('/').last
        metadata = load_metadata parent_path( file_path )
        id = entry_id "volumes/#{ file_path }"

        if file_config[:ext]
          name = name.chomp( ".#{ file_config[:ext] }" )
        end

        {
          type: :edit_file,
          name: name,
          metadata: metadata[ id ] || {},
          path: "#{ file_path }/~file",
          key: file_config[:key],
          index: file_config[:index],
          description: file_config[:description],
          # config: file_config,
        }

      end

    end
  end
end
