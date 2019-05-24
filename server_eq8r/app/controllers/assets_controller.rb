class Server
  module App
    module Controllers

      get '/assets/client.js' do
        content_type :'application/javascript'
        @distribution = App::Models::Distribution.new "0.0.1"
        @distribution.client
      end

      get '/assets/axfunction/axf.js' do
        content_type :'application/javascript'
        @distribution = App::Models::Distribution.new "0.0.1"
        @distribution.axf
      end

      get '/assets/axfunction/axf-plugins.js' do
        content_type :'application/javascript'
        @distribution = App::Models::Distribution.new "0.0.1"
        @distribution.plugins
      end

      # get '/assets/axfunction/themes/:theme' do
      #   content_type :'application/javascript'
      #   set_distribution
      #   @distribution.theme(params[:theme])
      #   erb "/../axFunction/themes/#{theme}".to_sym
      # end
      #
      # get '/assets/axfunction/themes/*path' do
      #   content_type :'application/javascript'
      #   set_distribution
      #   # byebug
      #   File.read( "#{settings.views}/axFunction/themes/#{params[:path]}" )
      # end

      # private
      #
      # def set_distribution
      #   @distribution = App::Models::Distribution.new
      # end

    end
  end
end
