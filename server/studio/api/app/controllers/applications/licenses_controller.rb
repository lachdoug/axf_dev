module Server
  class Api
    module App
      module Controllers

        get '/applications/:id/license' do
          content_type :'application/json'
          Application.find( params[:id] ).license.to_json
        end

        post '/applications/:id/license' do
          content_type :'application/json'
          Application.find( params[:id] ).license.update( params[:license] ).to_json
        end

      end
    end
  end
end
