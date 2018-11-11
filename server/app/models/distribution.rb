class Server
  module App
    module Models
      module Distribution

        require 'uglifier'

        module Axf

          def self.distribution
            Distribution.concatenate( [ './axfunction/src/axf/**/*.js' ] )
          end

          def self.minified
            Distribution.minify distribution
          end

        end

        module Plugins

          def self.distribution
            Distribution.concatenate( [
              './axfunction/src/plugins/axf-appkit/**/*.js',
              './axfunction/src/plugins/axf-appkit-form-extras/**/*.js',
              './axfunction/src/plugins/axf-appkit-theme-base/**/*.js',
              './axfunction/src/plugins/axf-appkit-codemirror/**/*.js',
              './axfunction/src/plugins/axf-appkit-markedjs/**/*.js',
              './axfunction/src/plugins/axf-appkit-simplemde/**/*.js',
              './axfunction/src/plugins/axf-appkit-quilljs/**/*.js',
            ] )
          end

          def self.minified
            Distribution.minify distribution
          end

        end

        module Client

          def self.distribution
            Distribution.concatenate( [ './client/**/*.js' ] )
          end

          def self.minified
            Distribution.minify distribution
          end

        end

        def self.concatenate( sources )
          [].tap do |result|
            sources.each do |source|
              files_from( source ).each do |file|
                result << File.read( file )
              end
            end
          end.join("\n")
        end

        def self.minify( javascript )
          Uglifier.compile javascript, harmony: true
        end

        def self.files_from( source )
          # debugger
          Dir.glob( [ source ] ).select { |file| puts file; File.file?(file) }.sort{ |a, b| a.count('/') <=> b.count('/') }
        end

      end
    end
  end
end
