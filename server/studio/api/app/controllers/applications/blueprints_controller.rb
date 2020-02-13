module Server
  class Api
    module App
      module Controllers

        get '/applications/:id/blueprint' do
          content_type :'application/json'
          Application.find( params[:id] ).blueprint.to_json
        end

        post '/applications/:id/blueprint' do
          content_type :'application/json'
          Application.find( params[:id] ).blueprint.update( request.body ).to_json
        end

      end
    end
  end
end
