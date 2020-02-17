module Server
  class Api
    module App
      module Controllers

        post '/applications/:id/commit' do
          content_type :'application/json'
          Application.new( params[:id] ).repo.commit( params[:commit] ).to_json
        end

      end
    end
  end
end


# [
#   { uri: 'git@github.com:EnginesBlueprints/Enginepad.git' }
#   { uri: 'git@github.com:lachdoug/fake_app_blueprint.git' }
# ]
