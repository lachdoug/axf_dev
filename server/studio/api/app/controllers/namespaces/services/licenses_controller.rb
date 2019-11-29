module Server
  class Api
    module App
      module Controllers

        get '/namespaces/:namespace_id/services/:id/license' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).services.find( params[:id] ).license.to_json
        end

        post '/namespaces/:namespace_id/services/:id/license' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).services.find( params[:id] ).license.update( params[:license] ).to_json
        end

      end
    end
  end
end
