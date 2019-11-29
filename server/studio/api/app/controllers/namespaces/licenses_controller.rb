module Server
  class Api
    module App
      module Controllers

        get '/namespaces/:id/license' do
          content_type :'application/json'
          Namespace.find( params[:id] ).license.to_json
        end

        post '/namespaces/:id/license' do
          content_type :'application/json'
          Namespace.find( params[:id] ).license.update( params[:license] ).to_json
        end

      end
    end
  end
end
