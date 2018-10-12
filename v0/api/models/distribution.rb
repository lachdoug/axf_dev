class V0
  module Api
    module Models
      module Distribution

        require 'uglifier'

        module Axf

          def self.distribution
            Distribution.concatenate( [ './v0/axFunction/axf/**/*.js' ] )
          end

          def self.minified
            Distribution.minify distribution
          end

        end

        module Plugins

          def self.distribution
            Distribution.concatenate( [ './v0/axFunction/plugins/**/*.js' ] )
          end

          def self.minified
            Distribution.minify distribution
          end

        end

        module Client

          def self.distribution
            Distribution.concatenate( [ './v0/client/src/**/*.js' ] )
          end

          def self.minified
            Distribution.minify distribution
          end

        end

        def self.concatenate( sources )
          [].tap do |result|
            files_from( sources ).each do |file|
              result << File.read( file )
            end
          end.join("\n")
        end

        def self.minify( javascript )
          Uglifier.compile javascript, harmony: true
        end

        def self.files_from( sources )
          # debugger
          Dir.glob( sources ).select { |file| File.file?(file) }.sort{ |a, b| a.count('/') <=> b.count('/') }
        end

      end
    end
  end
end
