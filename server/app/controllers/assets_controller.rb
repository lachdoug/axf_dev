class Server
  module App
    module Controllers

      get '/assets/client.js' do
        content_type :'application/javascript'
        # byebug
        App::Models::Distribution::Client.distribution
        # erb :'client.js'
      end

      get '/assets/axfunction/axf.js' do
        content_type :'application/javascript'
        # byebug
        App::Models::Distribution::Axf.distribution
        # erb :'/../axFunction/axf.js'
      end

      get '/assets/axfunction/axf-plugins.js' do
        content_type :'application/javascript'
        App::Models::Distribution::Plugins.distribution
        # erb :'/axFunction/extensions.js'
      end

      get '/assets/axfunction/themes/:theme' do
        content_type :'application/javascript'
        # byebug
        erb "/../axFunction/themes/#{params[:theme]}".to_sym
      end

      get '/assets/axfunction/themes/*path' do
        content_type :'application/javascript'
        # byebug
        File.read( "#{settings.views}/axFunction/themes/#{params[:path]}" )
      end

    end
  end
end
