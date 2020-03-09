module Server
  class Api
    module App
      module Controllers

        post '/namespaces/:namespace_id/workspace/push' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).workspace.repo.push.to_json
        end

      end
    end
  end
end
