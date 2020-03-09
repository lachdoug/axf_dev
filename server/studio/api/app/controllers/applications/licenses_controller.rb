module Server
  class Api
    module App
      module Controllers

        get '/applications/:application_id/license' do
          content_type :'application/json'
          Application.find( params[:application_id] ).license.to_json
        end

        post '/applications/:application_id/license' do
          content_type :'application/json'
          Application.find( params[:application_id] ).license.update( params[:license] ).to_json
        end

      end
    end
  end
end
