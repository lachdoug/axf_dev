class Server
  module App
    module Helpers

      def update_directory( dir_path, dir_config, dir_params )

        dir_params ||= {}

        parent_path = parent_path( dir_path )

        if dir_config[:index]

          item_dir_path = dir_path

        else

          new_name = dir_params[:name]

          raise ApiError.new( "Requires a name.", 422 ) unless new_name

          item_dir_path = "#{ parent_path }/#{ new_name }"

          rename_entry "volumes/#{ dir_path }", "volumes/#{ item_dir_path }"

        end

        if dir_config[:description]

          metadata = load_metadata parent_path
          dir_id = entry_id "volumes/#{ dir_path }"
          metadata[ dir_id ] ||= {}
          metadata_params = dir_params[:metadata] || {}

          metadata[ dir_id ][:description] = metadata_params[:description]

          save_metadata parent_path, metadata

        end

        {
          type: :update_dir,
          path: "#{ item_dir_path }/~dir"
        }

      end

    end
  end
end
