module Server
  class Api
    module App
      module Controllers

        get '/namespaces/:namespace_id/workspace/status' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).workspace.repo.status.to_json
        end

      end
    end
  end
end
