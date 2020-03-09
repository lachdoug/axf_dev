module Server
  class Api
    module App
      module Controllers

        get '/consumables/namespaces' do
          content_type :'application/json'
          Consumables.namespaces.to_json
        end

        get '/consumables/namespaces/query' do
          content_type :'application/json'
          Consumables.namespace( params[:namespace] ).to_json
        end

        get '/consumables/namespaces/types/query' do
          content_type :'application/json'
          Consumables.type( params[:namespace], params[:type] ).to_json
        end

      end
    end
  end
end
