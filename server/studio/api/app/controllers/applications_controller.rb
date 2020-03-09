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

        get '/applications/:application_id' do
          content_type :'application/json'
          Application.find( params[:application_id] ).to_json
        end

        delete '/applications/:application_id' do
          content_type :'application/json'
          Application.find( params[:application_id] ).delete.to_json
        end

      end
    end
  end
end
