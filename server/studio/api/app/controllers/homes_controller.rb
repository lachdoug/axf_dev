module Server
  class Api
    module App
      module Controllers

        get '/' do
          content_type :'application/json'
          Home.new.to_json
        end

      end
    end
  end
end
