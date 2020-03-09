module Server
  class Api
    module App
      module Controllers

        post '/namespaces/:namespace_id/workspace/services/:service_id/push' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).workspace.services.find( params[:service_id] ).repo.push.to_json
        end

      end
    end
  end
end
