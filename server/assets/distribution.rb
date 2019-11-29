module Server
  class Assets
    class Distribution

      require 'uglifier'

      def initialize( version=nil )
        @version = version
      end

      def path
        raise "Version can't be blank" if @version === nil
        @path ||= "axf/release/#{@version}"
      end

      def process
        if Dir.exist? path
          raise "Release #{@version} already exists!"
        else
          process!
        end
      end

      def process!
        if Dir.exist? path
          FileUtils.rm_r path
        end
        puts "Building release #{@version}"
        Dir.mkdir path
        Dir.mkdir "#{path}/axf"
        Dir.mkdir "#{path}/plugins"
        File.write( "#{path}/axf/axf.js", axf )
        File.write( "#{path}/axf/axf.min.js", axf_min )
        File.write( "#{path}/plugins/plugins.js", plugins )
        File.write( "#{path}/plugins/plugins.min.js", plugins_min )
        `jsdoc --readme axf/src/axf/README.md #{path}/axf/axf.js -d #{path}/docs/axf`
        `jsdoc #{path}/plugins/plugins.js -d #{path}/docs/plugins`
      end

      def axf
        @axf ||= Axf.package
      end

      def axf_min
        @axf_min ||= minify axf
      end

      def plugins
        @plugins ||= AxfPlugins.package
      end

      def plugins_min
        minify plugins
      end

      def system_client
        @plugins ||= SystemClient.package
      end

      def system_client_min
        minify system_client
      end

      def studio_client
        @plugins ||= StudioClient.package
      end

      def studio_client_min
        minify studio_client
      end

      def minify( javascript )
        Uglifier.compile javascript, harmony: true
      end


    end
  end
end
