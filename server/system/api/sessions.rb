module Server
  class Api

    before do
      @current_user = App::Models::User.new( settings, session )
      @current_user.authenticate! unless request.path_info == '/session' && request.request_method == 'POST'
      @engines = App::Models::Engines.new(
                    settings.engines_system_ip,
                    @current_user.api_token,
                    logger )
    end

  end
end
