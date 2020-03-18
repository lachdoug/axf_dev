module Server
  class Api
    module App
      module Controllers

        get '/namespaces/:namespace_id/workspace/diff' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).workspace.repo.diff.to_json
        end

      end
    end
  end
end
