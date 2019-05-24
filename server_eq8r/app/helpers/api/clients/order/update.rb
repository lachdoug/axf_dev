class Server
  module App
    module Helpers

      def update_clients_order( order )

        new_config = eq8r_config "clients"

        new_config[:order] = order

        write_file 'data/clients/eq8r.config', new_config.to_yaml

        { clients: order.map { |name| client_item name } }

      end

    end
  end
end
