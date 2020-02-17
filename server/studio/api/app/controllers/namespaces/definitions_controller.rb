module Server
  class Api
    module App
      module Controllers

        get '/namespaces/:id/definitions' do
          content_type :'application/json'
          Namespace.find( params[:id] ).definitions.to_json
        end

        get '/namespaces/:id/definitions/entry' do
          content_type :'application/json'
          Namespace.find( params[:id] ).definitions.find( params[:type] ).to_json
        end

      end
    end
  end
end
