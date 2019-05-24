class Server
  module App
    module Helpers

      def show_raw_file( behavior, file_path, file_config )

        entry_path = "volumes/#{ file_path }"

        entry = file_entry behavior, file_path, file_config

        contents = read_file entry_path

        entry[:type] = :raw_file
        entry[:contents] = contents

        entry

      end

    end
  end
end
