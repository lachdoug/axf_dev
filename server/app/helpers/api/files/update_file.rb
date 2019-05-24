class Server
  module App
    module Helpers

      def update_file( file_path, file_config, file_params )

        file_params ||= {}

        dir_path = parent_path( file_path )

        if file_config[:index]

          item_file_path = file_path

        else

          new_name = file_params[:name]

          raise ApiError.new( "Requires a name.", 422 ) unless new_name

          if file_config[:ext]
            new_name = "#{ new_name }.#{ file_config[:ext] }"
          end

          item_file_path = "#{ dir_path }/#{ new_name }"

          rename_entry "volumes/#{ file_path }", "volumes/#{ item_file_path }"

        end

        if file_config[:description]

          metadata = load_metadata dir_path
          file_id = entry_id "volumes/#{ file_path }"
          metadata[ file_id ] ||= {}
          metadata_params = file_params[:metadata] || {}

          metadata[ file_id ][:description] = metadata_params[:description]

          save_metadata dir_path, metadata

        end

        {
          type: :update_file,
          path: "#{ item_file_path }/~file"
        }

      end

    end
  end
end
