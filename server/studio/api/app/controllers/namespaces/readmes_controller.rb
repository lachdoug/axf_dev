module Server
  class Api
    module App
      module Controllers

        get '/namespaces/:namespace_id/readme' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).readme.to_json
        end

        post '/namespaces/:namespace_id/readme' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).readme.update( params[:readme] ).to_json
        end

      end
    end
  end
end
