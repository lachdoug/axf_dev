module Server
  class Client < Sinatra::Base

    require_relative '../assets/system_client'

    set :views, File.join( root, "../views" )

    get '/app.js' do
      content_type :'application/javascript'
      Server::Assets::SystemClient.package
    end

    get '*' do
      status 200
      erb :'index.html'
    end

    not_found do
      content_type :text
      status 404
      "Server 404. Route not found: #{ request.request_method } '#{ request.path_info }'."
    end

  end
end
