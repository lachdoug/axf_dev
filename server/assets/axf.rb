module Server
  class Assets
    module Axf

      require_relative 'packager'
      extend Packager

      def self.package
        concatenate( [ './axf/src/axf/**/*.js' ] )
      end

    end
  end
end
