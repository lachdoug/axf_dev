class Server
  module App
    module Helpers

      def clients

        clients = list_directories 'data/clients'

        config = eq8r_config "clients"

        order = config[:order] || []

        clients = clients.sort_by { |x| order.index(x) || -1 }

        { clients: clients.map { |name| client_item( name ) } }

      end

    end
  end
end
