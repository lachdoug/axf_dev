module Server
  class Assets < Sinatra::Base

    require_relative 'assets/axf'
    require_relative 'assets/axf_plugins'

    get '/axf.js' do
      content_type :'application/javascript'
      Axf.package
    end

    get '/axf-plugins.js' do
      content_type :'application/javascript'
      AxfPlugins.package
    end

    # get '*' do
    #   debugger
    # end

  end
end
