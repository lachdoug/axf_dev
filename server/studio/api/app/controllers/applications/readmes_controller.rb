module Server
  class Api
    module App
      module Controllers

        get '/applications/:id/readme' do
          content_type :'application/json'
          Application.find( params[:id] ).readme.to_json
        end

        post '/applications/:id/readme' do
          content_type :'application/json'
          Application.find( params[:id] ).readme.update( params[:readme] ).to_json
        end

      end
    end
  end
end
