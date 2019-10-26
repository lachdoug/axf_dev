module Server
  class Client < Sinatra::Base

    require_relative 'client/distribution'

    # set :views, File.join( root, "client/views" )

    set logging: Sinatra::Base.development? ? Logger::DEBUG : Logger::INFO,
        dump_errors: Sinatra::Base.development?

    get '/client.js' do
      content_type :'application/javascript'
      @distribution = Distribution.new
      @distribution.client
    end

    get '/axfunction/axf.js' do
      content_type :'application/javascript'
      @distribution = Distribution.new
      @distribution.axf
    end

    get '/axfunction/axf-plugins.js' do
      content_type :'application/javascript'
      @distribution = Distribution.new
      @distribution.plugins
    end

    get '/xterm' do
      status 200
      erb :'xterm.html'
    end

    get '*' do
      status 200
      erb :'index.html'
    end

    not_found do
      content_type :text
      "Not found: #{ request.request_method } '#{ request.path_info }'."
    end

  end
end
