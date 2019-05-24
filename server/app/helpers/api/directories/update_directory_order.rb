class Server
  module App
    module Helpers

      def update_directory_order( dir_path, dir_config, dir_params )

        dir_params ||= {}

        metadata = load_metadata dir_path
        order = dir_params[:order] || []

        order.each.with_index do | id, i |
          metadata[ id.to_i ] ||= {}
          metadata[ id.to_i ][:order] = i + 1
        end

        save_metadata dir_path, metadata

        {
          type: :update_dir_order,
          path: "#{ dir_path }/~dir"
        }

      end

    end
  end
end
