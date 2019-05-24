class Server
  module App
    module Controllers

      put '/api/clients/order' do
        update_clients_order( params[:order] )
      end

      # debugger

    end
  end
end
