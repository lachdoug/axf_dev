module Server
  class Api
    module App
      module Controllers

        get '/namespaces/:namespace_id/workspace/license' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).workspace.license.to_json
        end

        post '/namespaces/:namespace_id/workspace/license' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).workspace.license.update( params[:license] ).to_json
        end

      end
    end
  end
end
