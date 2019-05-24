class Server
  module App
    module Helpers

      def mode_map( type )

        return nil unless type

        map = {
          json: 'javascript',
          yaml: 'yaml',
          rb: 'ruby',
          sh: 'shell',
          py: 'python',
        }.merge( config[:mode_map] || {} )

        map[ type.to_sym ]

      end

    end
  end
end
