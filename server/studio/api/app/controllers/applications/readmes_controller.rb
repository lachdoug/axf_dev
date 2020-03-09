module Server
  class Api
    module App
      module Controllers

        get '/applications/:application_id/readme' do
          content_type :'application/json'
          Application.find( params[:application_id] ).readme.to_json
        end

        post '/applications/:application_id/readme' do
          content_type :'application/json'
          Application.find( params[:application_id] ).readme.update( params[:readme] ).to_json
        end

      end
    end
  end
end
