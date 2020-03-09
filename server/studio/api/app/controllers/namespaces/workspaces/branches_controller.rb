module Server
  class Api
    module App
      module Controllers

        get '/namespaces/:namespace_id/workspace/branch' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).workspace.repo.branch.to_json
        end

        post '/namespaces/:namespace_id/workspace/branch' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).workspace.repo.branch.set( params[:current] ).to_json
        end

        delete '/namespaces/:namespace_id/workspace/branch' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).workspace.repo.branch.remove( params[:name] ).to_json
        end

      end
    end
  end
end
