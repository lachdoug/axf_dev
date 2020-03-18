module Server
  class Api
    module App
      module Controllers

        get '/namespaces/:namespace_id/workspace/services/:service_id/diff' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).workspace.services.find( params[:service_id] ).repo.diff.to_json
        end

      end
    end
  end
end
