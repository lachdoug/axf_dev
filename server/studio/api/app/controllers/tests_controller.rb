module Server
  class Api
    module App
      module Controllers

        post '/test' do
          content_type :'application/json'
          params.to_json
        end

      end
    end
  end
end
