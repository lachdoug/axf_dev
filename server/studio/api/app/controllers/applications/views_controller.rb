module Server
  class Api
    module App
      module Controllers

        get '/applications/:application_id/views' do
          content_type :'application/json'
          Application.find( params[:application_id] ).views.to_json
        end

        post '/applications/:application_id/views' do
          content_type :'application/json'
          Application.find( params[:application_id] ).views.create( params[:view] ).to_json
        end

        get '/applications/:application_id/views/:name' do
          content_type :'application/json'
          Application.find( params[:application_id] ).views.find( params[:name] ).to_json
        end

        post '/applications/:application_id/views/:name' do
          content_type :'application/json'
          Application.find( params[:application_id] ).views.update( params[:name], params[:view] ).to_json
        end



      end
    end
  end
end
