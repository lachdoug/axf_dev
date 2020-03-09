module Server
  class Api
    module App
      module Controllers


        get '/namespaces/:namespace_id/workspace/services' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).workspace.services.to_json
          # Service.index.to_json
        end

        post '/namespaces/:namespace_id/workspace/services' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).workspace.services.create( params[:service] ).to_json
        end

        get '/namespaces/:namespace_id/workspace/services/:service_id' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).workspace.services.find( params[:service_id] ).to_json
        end

        get '/namespaces/:namespace_id/workspace/services/:service_id/name' do
          content_type :'application/json'
          { name: Namespace.find( params[:namespace_id] ).workspace.services.find( params[:service_id] ).name }.to_json
        end

        delete '/namespaces/:namespace_id/workspace/services/:service_id' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).workspace.services.find( params[:service_id] ).delete.to_json
        end

      end
    end
  end
end


# [
#   { uri: 'git@github.com:EnginesBlueprints/Enginepad.git' }
#   { uri: 'git@github.com:lachdoug/fake_app_blueprint.git' }
# ]
