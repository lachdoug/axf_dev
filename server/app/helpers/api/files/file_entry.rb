class Server
  module App
    module Helpers

      def file_entry( behavior, file_path, file_config )

        entry_path = "volumes/#{ file_path }"
# debugger
        dir_path = parent_path file_path
        metadata = load_metadata( dir_path )

        # key = File.basename entry_path, '.*'
        name = File.basename entry_path
        path = file_path
        id = entry_id entry_path
        modified = File.mtime( entry_path ).to_f * 1000
        entry_metadata = metadata[ id ] || {}

        if behavior === :collection
          description = entry_metadata[:description]
        else
          description = file_config[:description]
        end
        {
          path: "#{ file_path }/~file",
          name: name,
          item: behavior === :collection,
          key: file_config[:key],
          id: id,
          description: description || '',
          # metadata: entry_metadata,
          modified: modified,
          # config: file_config,
        }

      end

    end
  end
end
