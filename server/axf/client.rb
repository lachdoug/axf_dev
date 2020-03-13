module Server
  class Client < Sinatra::Base

    require_relative '../assets/axf_client'

    set :views, File.join( root, "../views" )

    get '/app.js' do
      content_type :'application/javascript'
      Server::Assets::AxfClient.package
    end

    get '*' do
      status 200
      erb :'index.html'
    end

    post '*' do
      status 200
      content_type :'application/json'
      params.to_json
    end


    not_found do
      content_type :text
      status 404
      "Server 404. Route not found: #{ request.request_method } '#{ request.path_info }'."
    end

    error do |e|
      message = "Fatal error.\n#{ e.full_message }"
      logger.error message
      content_type :text
      status 500
      message
    end

  end
end
