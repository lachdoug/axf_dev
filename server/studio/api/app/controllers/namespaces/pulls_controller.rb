module Server
  class Api
    module App
      module Controllers

        get '/namespaces/:id/pull' do
          content_type :'application/json'
          Namespace.find( params[:id] ).repo.pull.to_json
        end

      end
    end
  end
end
