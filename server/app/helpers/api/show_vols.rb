class Server
  module App
    module Helpers

      def show_vols( vols_config )

        metadata = load_metadata( '' )

        entries = vols_config.map do |vol_config|

          name = vol_config[:key]
          id = entry_id "volumes/#{ name }"
          entry_metadata = metadata[ id ] || {}

          description = vol_config[:description]

          {
            path: "#{ name }/~dir",
            # type: :show_dir,
            name: name,
            key: name,
            id: id,
            description: description,
            metadata: entry_metadata,
            created: File.ctime( "volumes/#{ name }" ),
            updadte: File.mtime( "volumes/#{ name }" )
          }
        end

        {
          name: '',
          key: '',
          type: :show_dir,
          collection: false,
          collect: { dirs: false, files: false },
          entries: entries,
          config: vols_config,
          metadata: {},
          created: nil,
          updated: nil,
        }

      end

    end
  end
end
