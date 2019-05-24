class Server
  module App
    module Helpers

      def directory_entries( dir_path, dir_config )

        collect_dirs = dir_config[:dirs].is_a? Hash
        collect_files = dir_config[:files].is_a? Hash

        metadata = load_metadata( dir_path )

        list_options = {}
        if collect_files && dir_config[:files][:index]
          list_options[:index_files] = true
        end
        if collect_dirs && dir_config[:dirs][:index]
          list_options[:index_dirs] = true
        end

        entries = list_directory( "volumes/#{ dir_path }", list_options ) do |entry|

          key = File.basename entry, '.*'
          name = File.basename entry
          path = entry.sub /^volumes\//, ''
          id = entry_id entry
          # created = File.ctime entry
          # updated = File.mtime entry
          entry_metadata = metadata[ id ] || {}

          if File.file? entry
            # debugger
            type = :file
            if collect_files
              description = entry_metadata[:description]
            else
              if dir_config[:files]
                subdir_config = dir_config[:files].detect do |file_config|
                  file_config[:key] === key
                end || {}
                description = subdir_config[:description]
              else
                description = ''
              end
            end
          else
            type = :dir
            if collect_dirs
              description = entry_metadata[:description]
            else
              if dir_config[:dirs]
                subdir_config = dir_config[:dirs].detect do |subdir_config|
                  subdir_config[:key] === key
                end || {}
                description = subdir_config[:description]
              else
                description = ''
              end
            end
          end

          order = entry_metadata[:order] || 0

          {
            path: "#{ path }/~#{ type }",
            type: type,
            name: name,
            key: key,
            id: id,
            description: description || '',
            order: order,
            # metadata: entry_metadata,
            # created: created,
            # updated: updated
          }

        end

        if dir_config[:order]
          entries = entries.sort_by do |entry|
            entry[:order]
          end
        end

        entries

      end

    end
  end
end
