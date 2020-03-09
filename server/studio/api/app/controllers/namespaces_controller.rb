module Server
  class Api
    module App
      module Controllers

        get '/namespaces' do
          content_type :'application/json'
          Namespace.to_json
        end

        get '/namespaces/:namespace_id' do
          content_type :'application/json'
          Namespace.new( params[:namespace_id] ).to_json
        end

        post '/namespaces/new' do
          content_type :'application/json'
          Namespace.create( params[:namespace] ).to_json
        end

        delete '/namespaces/:namespace_id' do
          content_type :'application/json'
          Namespace.new( params[:namespace_id] ).delete.to_json
        end

      end
    end
  end
end
