module Server
  class Api
    module App
      module Controllers

        get '/applications/:application_id/blueprint' do
          content_type :'application/json'
          Application.find( params[:application_id] ).blueprint.to_json
        end

        post '/applications/:application_id/blueprint' do
          content_type :'application/json'
          Application.find( params[:application_id] ).blueprint.update( request.body ).to_json
        end

      end
    end
  end
end
