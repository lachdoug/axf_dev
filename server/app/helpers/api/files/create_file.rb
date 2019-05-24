class Server
  module App
    module Helpers

      def create_file( dir_path, file_config, file_params )

        file_params ||= {}
        file_ext = file_config[:ext] ? ".#{ file_config[:ext] }" : ''

        if file_config[:index]

          metadata = load_metadata dir_path
          if metadata[:index]
            next_index = metadata[:index].to_i + 1
          else
            index = list_directory( "volumes/#{ dir_path }" ).select do |entry|
              File.file? entry
            end.map do |entry|
              entry.
                sub( "volumes/#{ dir_path }/", '' ).
                chomp( file_ext ).to_i
            end.max || 0
            next_index = index + 1
          end
          metadata[:index] = next_index
          save_metadata dir_path, metadata

          new_file_path = "#{ dir_path }/#{ next_index }#{ file_ext }"

        else

          name = file_params[:name]

          raise ApiError.new( "Requires a name.", 422 ) unless name

          file_name = "#{ file_params[:name] }#{ file_ext }"

          new_file_path = "#{ dir_path }/#{ file_name }"

        end

        text_file = file_config[:type] === "text"

        if text_file
          text = file_config[:text] || {}
          content = text[:content] || ''
        else
          content = ''
        end

        entry_path = "volumes/#{ new_file_path }"

        write_file entry_path, content

        if file_config[:description]

          metadata = load_metadata dir_path
          dir_id = entry_id entry_path
          metadata[ dir_id ] ||= {}
          metadata_params = file_params[:metadata] || {}

          metadata[ dir_id ][:description] = metadata_params[:description]

          save_metadata dir_path, metadata

        end

        {
          type: :create_file,
          path: "#{ new_file_path }/~file"
        }

      rescue Errno::EEXIST

        raise ApiError.new( "#{ name } already exists.", 409 )

      end

    end
  end
end
