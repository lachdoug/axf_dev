module Server
  class Api
    module App
      module Controllers

        get '/namespaces/:namespace_id/workspace/services/:service_id/branch' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).workspace.services.find( params[:service_id] ).repo.branch.to_json
        end

        post '/namespaces/:namespace_id/workspace/services/:service_id/branch' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).workspace.services.find( params[:service_id] ).repo.branch.set( params[:current] ).to_json
        end

        delete '/namespaces/:namespace_id/workspace/services/:service_id/branch' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).workspace.services.find( params[:service_id] ).repo.branch.remove( params[:name] ).to_json
        end

      end
    end
  end
end
