module Server
  class Api
    module App
      module Controllers


        get '/applications' do
          content_type :'application/json'
          Application.to_json
        end

        post '/applications' do
          content_type :'application/json'
          Application.create( params[:application] ).to_json
        end

        get '/applications/:id' do
          content_type :'application/json'
          Application.find( params[:id] ).to_json
        end

        # get '/applications/:id/name' do
        #   content_type :'application/json'
        #   { name: Application.find( params[:id] ).name }.to_json
        # end

        delete '/applications/:id' do
          content_type :'application/json'
          Application.find( params[:id] ).delete.to_json
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
