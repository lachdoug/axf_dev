module Server
  class Api
    module App
      module Controllers

        get '/session' do
          @current_user.to_s
        end

        post '/session' do
          token = @engines.post_api_vars(
            '/system/login',
            {
              user_name: "admin",
              password: params[:password]
            },
            { timeout: 5 }
          ).body
          @current_user.login( token )
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
