class Server
  module App
    module Models
      class Distribution

        require 'uglifier'

        def initialize( version )
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
          @axf ||= concatenate( [ './axf/src/axf/**/*.js' ] )
        end

        def axf_min
          @axf_min ||= minify axf
        end

        def plugins
          concatenate( [
            './axf/src/plugins/axf-appkit/**/*.js',
            './axf/src/plugins/axf-appkit-form-extras/**/*.js',
            './axf/src/plugins/axf-appkit-theme-base/**/*.js',
            './axf/src/plugins/axf-appkit-codemirror/**/*.js',
            './axf/src/plugins/axf-appkit-markedjs/**/*.js',
            './axf/src/plugins/axf-appkit-chartjs/**/*.js',
            './axf/src/plugins/axf-appkit-simplemde/**/*.js',
            './axf/src/plugins/axf-appkit-quilljs/**/*.js',
            './axf/src/plugins/axf-html5-sortable/**/*.js',
            './axf/src/plugins/axf-timeago/**/*.js',
          ] )
        end

        def plugins_min
          minify plugins
        end

        def client
          concatenate( [ './client/**/*.js' ] )
        end

        def client_min
          minify client
        end

        def concatenate( sources )
          ["'use strict'"].tap do |result|
            sources.each do |source|
              files_from( source ).each do |file|
                result << File.read( file )
              end
            end
          end.join("\n")
        end

        def minify( javascript )
          Uglifier.compile javascript, harmony: true
        end

        def files_from( source )
          Dir.glob( [ source ] ).select { |file| puts file; File.file?(file) }.sort{ |a, b| a.count('/') <=> b.count('/') }
        end

      end
    end
  end
end
