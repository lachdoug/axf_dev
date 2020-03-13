module Server
  class Api
    module App
      module Controllers

        get '/applications/:application_id/pull' do
          content_type :'application/json'
          Namespace.find( params[:application_id] ).repo.pull.to_json
        end

      end
    end
  end
end
