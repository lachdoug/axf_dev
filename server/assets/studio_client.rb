module Server
  class Assets
    module StudioClient

      require_relative 'packager'
      extend Packager

      def self.package
        concatenate( [ './client/common/**/*.js', './client/studio/**/*.js' ] )
      end

    end
  end
end
