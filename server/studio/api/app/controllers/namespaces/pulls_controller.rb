module Server
  class Api
    module App
      module Controllers

        get '/namespaces/:namespace_id/pull' do
          content_type :'application/json'
          Namespace.find( params[:namespace_id] ).repo.pull.to_json
        end

      end
    end
  end
end
