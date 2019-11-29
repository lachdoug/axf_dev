module Server
  class Api
    module App
      module Controllers

        get '/namespaces/:namespace_id/services/:id/readme' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).services.find( params[:id] ).readme.to_json
        end

        post '/namespaces/:namespace_id/services/:id/readme' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).services.find( params[:id] ).readme.update( params[:readme] ).to_json
        end

      end
    end
  end
end
