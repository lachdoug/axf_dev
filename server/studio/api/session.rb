module Server
  class Api

    before do
      @current_user = App::Models::User.new( settings, session )
      @current_user.authenticate! unless request.path_info == '/session' && request.request_method == 'POST'
    end

  end
end
