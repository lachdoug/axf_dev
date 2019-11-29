module Server
  class Assets
    module Packager

      def concatenate( sources )
        ["'use strict'"].tap do |result|
          sources.each do |source|
            files_from( source ).each do |file|
              result << File.read( file )
            end
          end
        end.join("\n")
      end

      def files_from( source )
        Dir.glob( [ source ] ).select { |file| puts file; File.file?(file) }.sort{ |a, b| a.count('/') <=> b.count('/') }
      end

    end
  end
end
