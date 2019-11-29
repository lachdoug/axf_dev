module Server
  class Assets
    module SystemClient

      require_relative 'packager'
      extend Packager

      def self.package
        concatenate( [ './client/common/**/*.js', './client/system/**/*.js' ] )
      end

    end
  end
end
