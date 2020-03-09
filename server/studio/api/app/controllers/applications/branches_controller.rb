module Server
  class Api
    module App
      module Controllers

        get '/applications/:application_id/branch' do
          content_type :'application/json'
          Application.new( params[:application_id] ).repo.branch.to_json
        end

        post '/applications/:application_id/branch' do
          content_type :'application/json'
          Application.new( params[:application_id] ).repo.branch.set( params[:current] ).to_json
        end

        delete '/applications/:application_id/branch' do
          content_type :'application/json'
          Application.new( params[:application_id] ).repo.branch.remove( params[:name] ).to_json
        end

      end
    end
  end
end
