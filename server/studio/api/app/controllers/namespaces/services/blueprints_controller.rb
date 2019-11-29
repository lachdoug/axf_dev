module Server
  class Api
    module App
      module Controllers

        get '/namespaces/:namespace_id/services/:id/blueprint' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).services.find( params[:id] ).blueprint.to_json
        end

        post '/namespaces/:namespace_id/services/:id/blueprint' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).services.find( params[:id] ).blueprint.update( params[:blueprint] ).to_json
        end

      end
    end
  end
end
