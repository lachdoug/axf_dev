class Server
  module App
    module Controllers

      get '/axfunction/*path' do
        pass unless request.accept? "text/html"
        content_type :html
        erb :'index.html'
      end

    end
  end
end
