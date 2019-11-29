module Server
  class Api
    module App
      module Controllers

        get '/session' do
          @current_user.to_s
        end

        post '/session' do
          sleep 1
          @current_user.login( params[:password] )
          'Logged in.'
        end

        delete '/session' do
          @current_user.logout!
          'Logged out.'
        end

      end
    end
  end
end
