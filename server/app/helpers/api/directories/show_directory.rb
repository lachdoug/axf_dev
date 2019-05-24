class Server
  module App
    module Helpers

      def show_directory( behavior, dir_path, dir_config )

        collect_dirs = dir_config[:dirs].is_a?( Hash ) ? dir_config[:dirs][:key] : false
        collect_files = dir_config[:files].is_a?( Hash ) ? dir_config[:files][:key] : false

        entries = directory_entries dir_path, dir_config

        parent_path = parent_path( dir_path )

        parent_metadata = load_metadata( parent_path )
        id = entry_id "volumes/#{ dir_path }"

        if behavior === :static
          dir_metadata = {}
          description = dir_config[:description]
        else
          dir_metadata = parent_metadata[ id ] || {}
          description = dir_metadata[:description]
        end

        dir = {
          path: "#{ dir_path }/~dir",
          name: dir_path.split('/').last,
          item: behavior === :collection,
          collect: { dirs: collect_dirs, files: collect_files },
          type: :show_dir,
          entries: entries,
          id: id,
          description: description,
          key: dir_config[:key],
          order: dir_config[:order],
          # config: dir_config,
          # metadata: dir_metadata
        }

#         if collect_dirs
#           dir[:dirs] = dir_config[:dirs]
#         end
# # debugger
#         if collect_files
#           dir[:files] = dir_config[:files]
#         end

        dir

      end

    end
  end
end
