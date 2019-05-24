class Server
  module App
    module Helpers

      def show_file( behavior, file_path, file_config )

        file = file_entry behavior, file_path, file_config

        file[:type] = :show_file

        as = file_config[:as] || as_map( file_config[:ext] )

        file[:mode] = file_config[:mode] ||
          mode_map( file_config[:serialize] || file_config[:ext] )

        if as

          file[:as] = as

          case as.to_sym
          when :link
            link_config = file_config[:link]
            href = process_template link_config[:href], file
            file[:link] = {
              label: link_config[:label],
              href: href
            }
          when :text, :markdown, :code
            entry_path = "volumes/#{ file_path }"
            file[:text] = read_file entry_path
          when :list
            serialize = file_config[:serialize] || file_config[:ext] === "yaml" ? :yaml : :json
            entry_path = "volumes/#{ file_path }"
            file_contents = read_file entry_path
            case serialize.to_sym
            when :yaml
              file[:object] = YAML.load( file_contents )
            when :json
              file[:object] = JSON.parse( file_contents )
            end
          end

        end

        file

      end

    end
  end
end
