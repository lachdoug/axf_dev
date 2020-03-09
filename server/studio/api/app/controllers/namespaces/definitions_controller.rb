module Server
  class Api
    module App
      module Controllers

        get '/namespaces/:namespace_id/definitions' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).definitions.to_json
        end

        get '/namespaces/:namespace_id/definitions/query' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).definitions.find( params[:type] ).to_json
        end

      end
    end
  end
end
