module Server
  class Api
    module App
      module Controllers

        get '/namespaces' do
          content_type :'application/json'
          Namespace.to_json
        end
        #
        # post '/applications' do
        #   @ssh_key = SshKey.new( settings )
        #   content_type :'application/json'
        #   Repo.create( params[:url], @ssh_key ).to_json
        # end

        get '/namespaces/:id' do
          content_type :'application/json'
          Namespace.new( params[:id] ).to_json
        end

        post '/namespaces/new' do
          content_type :'application/json'
          Namespace.create( params[:namespace] ).to_json
        end

        delete '/namespaces/:id' do
          content_type :'application/json'
          Namespace.new( params[:id] ).delete.to_json
        end


        # post '/applications' do
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
