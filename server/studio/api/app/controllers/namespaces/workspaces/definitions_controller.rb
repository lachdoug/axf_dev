module Server
  class Api
    module App
      module Controllers

        get '/namespaces/:namespace_id/workspace/definitions' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).workspace.definitions.to_json
        end

        get '/namespaces/:namespace_id/workspace/definitions/query' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).workspace.definitions.find( params[:type] ).to_json
        end

        delete '/namespaces/:namespace_id/workspace/definitions/query' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).workspace.definitions.find( params[:type] ).delete.to_json
        end

      end
    end
  end
end
