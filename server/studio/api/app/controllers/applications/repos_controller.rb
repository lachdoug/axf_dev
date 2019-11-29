module Server
  class Api
    module App
      module Controllers

        # get '/applications' do
        #   content_type :'application/json'
        #   Repo.index.to_json
        # end
        #
        # post '/applications' do
        #   @ssh_key = SshKey.new( settings )
        #   content_type :'application/json'
        #   Repo.create( params[:url], @ssh_key ).to_json
        # end

        get '/applications/:id/repo' do
          content_type :'application/json'
          Application.new( params[:id] ).repo.to_json
        end

        get '/applications/:id/repo/branch' do
          content_type :'application/json'
          Application.new( params[:id] ).repo.branch.to_json
        end

        post '/applications/:id/repo/branch/set' do
          content_type :'application/json'
          Application.new( params[:id] ).repo.branch.set( params[:name] ).to_json
        end

        post '/applications/:id/repo/branch/remove' do
          content_type :'application/json'
          Application.new( params[:id] ).repo.branch.remove( params[:name] ).to_json
        end


        #
        # delete '/applications/:application_id/repo/branch/:branch_name' do
        #   content_type :'application/json'
        #   Application.new( params[:application_id] ).repo.branch.delete( params[:branch_name] ).to_json
        # end


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
