module Server
  class Client < Sinatra::Base

    require_relative '../assets/studio_client'

    set :views, File.join( root, "../views" )
        
    get '/app.js' do
      content_type :'application/javascript'
      Server::Assets::StudioClient.package
    end

    get '*' do
      status 200
      erb :'index.html'
    end

  end
end
