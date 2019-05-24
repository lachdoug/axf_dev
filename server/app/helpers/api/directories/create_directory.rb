class Server
  module App
    module Helpers

      def create_directory( dir_path, dir_config, dir_params )

        dir_params ||= {}

        if dir_config[:index]

          metadata = load_metadata dir_path
          if metadata[:index]
            next_index = metadata[:index].to_i + 1
          else
            next_index = list_directory( "volumes/#{ dir_path }" ).select do |entry|
              File.directory? entry
            end.map do |entry|
              entry.sub( "volumes/#{ dir_path }/", '' ).to_i
            end.max + 1
          end
          metadata[:index] = next_index
          save_metadata dir_path, metadata

          new_dir_path = "#{ dir_path }/#{ next_index }"

        else

          name = dir_params[:name]

          raise ApiError.new( "Requires a name.", 422 ) unless name

          new_dir_path = "#{ dir_path }/#{ name }"

        end

        entry_path = "volumes/#{ new_dir_path }"
        make_directory entry_path

        build_static_dirs new_dir_path, dir_config

        if dir_config[:description]

          metadata = load_metadata dir_path
          dir_id = entry_id entry_path
          metadata[ dir_id ] ||= {}
          metadata_params = dir_params[:metadata] || {}

          metadata[ dir_id ][:description] = metadata_params[:description]

          save_metadata dir_path, metadata

        end

        {
          type: :create_dir,
          path: "#{ new_dir_path }/~dir"
        }

      rescue Errno::EEXIST

        raise ApiError.new( "#{ name } already exists.", 409 )

      end

    end
  end
end
