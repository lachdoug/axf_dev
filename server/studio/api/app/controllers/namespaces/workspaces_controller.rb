module Server
  class Api
    module App
      module Controllers


        get '/namespaces/:namespace_id/workspace' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).workspace.to_json
        end

        post '/namespaces/:namespace_id/workspace' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).workspace.create.to_json
        end

        delete '/namespaces/:namespace_id/workspace' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).workspace.delete.to_json
        end

      end
    end
  end
end
