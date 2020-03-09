module Server
  class Api
    module App
      module Controllers

        get '/namespaces/:namespace_id/workspace/services/:service_id/definition' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).workspace.services.find( params[:service_id] ).definition.to_json
        end

        post '/namespaces/:namespace_id/workspace/services/:service_id/definition' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).workspace.services.find( params[:service_id] ).definition.save.to_json
        end

      end
    end
  end
end
