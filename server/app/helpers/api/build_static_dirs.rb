class Server
  module App
    module Helpers

      def build_static_dirs( dir, dir_config )

        touch_directory "volumes/#{ dir }"

        if dir_config[:dirs].is_a? Array
          dir_config[:dirs].each do |subdir_config|
            touch_directory "volumes/#{ dir }/#{ subdir_config[:key] }"
            build_static_dirs "#{ dir }/#{ subdir_config[:key] }/", subdir_config
          end
        end

        if dir_config[:files].is_a? Array
          dir_config[:files].each do |file_config|
            touch_file "volumes/#{ dir }/#{ file_config[:key] }#{
              file_config[:ext] ? ".#{ file_config[:ext] }" : '' }"
          end
        end

      end

    end
  end
end
