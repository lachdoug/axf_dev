module Server
  class Api
    module App
      module Controllers

        get '/namespaces/:namespace_id/license' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).license.to_json
        end

        post '/namespaces/:namespace_id/license' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).license.update( params[:license] ).to_json
        end

      end
    end
  end
end
