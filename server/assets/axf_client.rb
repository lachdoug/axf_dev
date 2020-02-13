module Server
  class Assets
    module AxfClient

      require_relative 'packager'
      extend Packager

      def self.package
        concatenate( [ './client/common/**/*.js', './client/axf/**/*.js' ] )
      end

    end
  end
end
