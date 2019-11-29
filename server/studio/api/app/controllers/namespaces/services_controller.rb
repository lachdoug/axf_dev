module Server
  class Api
    module App
      module Controllers


        get '/namespaces/:namespace_id/services' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).services.to_json
          # Service.index.to_json
        end

        post '/namespaces/:namespace_id/services' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).services.create( params[:service] ).to_json
        end

        get '/namespaces/:namespace_id/services/:id' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).services.find( params[:id] ).to_json
        end

        get '/namespaces/:namespace_id/services/:id/name' do
          content_type :'application/json'
          { name: Namespace.find( params[:namespace_id] ).services.find( params[:id] ).name }.to_json
        end

        delete '/namespaces/:namespace_id/services/:id' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).services.find( params[:id] ).delete.to_json
        end

        # delete '/services/:id' do
        #   content_type :'application/json'
        #   Repo.new( params[:id] ).delete.to_json
        # end


        # post '/services' do
        #   Repo.create( params.repo )
        # end


      end
    end
  end
end


# [
#   { uri: 'git@github.com:EnginesBlueprints/Enginepad.git' }
#   { uri: 'git@github.com:lachdoug/fake_app_blueprint.git' }
# ]
