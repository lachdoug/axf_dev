class Server
  module App
    module Helpers

      def edit_raw_file( behavior, file_path, file_config )

        entry_path = "volumes/#{ file_path }"

        entry = file_entry behavior, file_path, file_config

        contents = read_file entry_path

        entry[:type] = :edit_raw_file
        entry[:contents] = contents

        entry[:mode] = file_config[:mode] ||
          mode_map( file_config[:serialize] || file_config[:ext] )

        entry

      end

    end
  end
end
