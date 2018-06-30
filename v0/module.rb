

class V0 < Sinatra::Base

  ## For debugging
  ##----------------------------------------------------------------------------

  before do

    if Sinatra::Base.development?
      puts 'Request'
      puts request.path_info
      puts request.request_method
      puts params.inspect
    end
  end


  ##############################################################################
  ## Settings
  ##############################################################################

  set dump_errors: Sinatra::Base.development?
  set show_exceptions: false
  set public_folder: 'public'
  set data_directory_path: 'data/v0'
  set session_secret: ENV['ENGINES_ADMIN_GUI_SESSION_SECRET'] || '0'
  set user_inactivity_timeout: ( ENV['ENGINES_ADMIN_GUI_USER_INACTIVITY_TIMEOUT'] || 30 ).to_i * 60
  # set environment: Sprockets::Environment.new

  ##############################################################################
  ## Assets
  ##############################################################################

  # environment.append_path "client/lib"


  ##############################################################################
  ## CLIENT
  ##############################################################################

  # Here are the erb files
  set :views, Proc.new { File.join(root, "client") }



  get '/go' do

        require "selenium-webdriver"

        driver = Selenium::WebDriver.for :firefox
        driver.navigate.to "http://google.com"

        element = driver.find_element(name: 'q')
        element.send_keys "Hello WebDriver!"
        element.submit

        puts driver.title

        driver.quit

  end

  get '/client.js' do
    content_type :'application/javascript'
    erb :'client.js'
  end

  get '/axf.js' do
    content_type :'application/javascript'
    # byebug
    erb :'/ax_framework/axf.js'
  end

  get '/axf/themes/:theme' do
    content_type :'application/javascript'
    # byebug
    erb "/ax_framework/themes/#{params[:theme]}".to_sym
  end

  get '/axf/themes/*path' do
    content_type :'application/javascript'
    # byebug
    File.read( "#{settings.views}/ax_framework/themes/#{params[:path]}" )
  end

  get '*path' do
    pass if params[:path].split("/")[1] == "power"
    pass unless request.accept? "text/html"
    content_type :html
    if params[:path] === "/i"
      erb :'index_bootstrap.html'
    else
      erb :'index.html'
    end
  end



  ##############################################################################
  ## Errors
  ##############################################################################

  class NonFatalError < StandardError;
    def initialize(message, status_code=500)
      @message = message
      @status_code = status_code
    end
    attr_reader :status_code, :message
  end


  ##############################################################################
  ## API
  ##############################################################################

  ## Load-up the controllers, models & services
  ##----------------------------------------------------------------------------

  require_relative 'api/api'
  register Api::Controllers

  ## Helpers
  ##----------------------------------------------------------------------------

  helpers Api::Helpers


  ## Error handling
  ##----------------------------------------------------------------------------

  ## 400 Fatal: General client error
  ## 401 Non-fatal: Authentication failed
  ## 404 Fatal: Bad route
  ## 405 Non-fatal: Action not allowed (route is recognised, but action cannot be performed)
  ## 406 Fatal: Params not acceptable (route is recognised, but params incomplete or invalid)
  ## 500 Fatal: General server error
  ## 503 Non-fatal: System busy or unavailable

  error do |error|
    if error.is_a?(NonFatalError)
      [ error.status_code, { error: { message: error.message } } ]
    else
      error_text = error.class.to_s + " (" + error.message + ")"
      [ 500, { error: { message: "Server error.",
        detail: {
          application: "Admin GUI ApiV0 v0.5",
          type: :Server500,
          text: error_text,
          method: request.request_method,
          path: request.fullpath,
          backtrace: error.backtrace,
      } } } ]
    end
  end

  not_found do
    { error: { message: "Error.", detail: {
      application: "Admin GUI ApiV0 v0.5",
      type: :Server404,
      text: "#{request.fullpath} not found",
      method: request.request_method,
      path: request.fullpath,
      } } }
  end

  ## Default content type to JSON
  ##----------------------------------------------------------------------------

  before do
    content_type :json
  end

  after do
    response.body = JSON.pretty_generate( response.body ) if
      ( content_type == "application/json" ) &&
      not( response.body.is_a? String )
  end

  ## Authenticate
  ##----------------------------------------------------------------------------

  # enable :sessions
  #
  # before do
  #   raise NonFatalError.new('Not signed in.', 401) unless
  #     no_auth || current_user
  # end
  #
  # def no_auth
  #   request.path_info == '/' ||
  #   request.path_info == '/system/signin' ||
  #   request.path_info == '/system/container_events' ||
  #   request.path_info == '/system/statistics/container_memory' ||
  #   request.path_info == '/client' ||
  #   request.path_info == '/client/select_system'
  #   #  ||
  #   # request.path_info == '/client/display_settings'
  # end
  #
  # def system_api_token
  #   current_user.system_api_token if current_user
  # end
  #
  # def system_api_url
  #   session[:system_api_url] || settings.system_api_url
  # end
  #
  # def show_software_titles
  #   session[:show_software_titles].nil? ?
  #   settings.show_software_titles :
  #   session[:show_software_titles]
  # end
  #
  # def show_services
  #   session[:show_services].nil? ?
  #   settings.show_services :
  #   session[:show_services]
  # end
  #
  # def show_container_memory_usage
  #   session[:show_container_memory_usage].nil? ?
  #   settings.show_container_memory_usage :
  #   session[:show_container_memory_usage]
  # end
  #
  #
  # def current_user(opts={})
  #   return @current_user if @current_user
  #   user = Api::Models::User.new session, settings
  #   @current_user = user if user.authenticated?(opts)
  # end

  ## Set core resources
  ##----------------------------------------------------------------------------

  # def system(opts={})
  #   @system ||=
  #     Api::Models::System.new(
  #       system_api_url,
  #       opts[:without_token] ? nil : system_api_token,
  #       settings )
  # end

  # def selected_system_api_url
  #   session[:system_api_url] || settings.system_api_url
  # end

  # def libraries
  #   @libraries ||=
  #     ApiV0::Libraries.all
  # end

  # def set_app(app_name)
  #   @app = system.app app_name
  # end
  #
  # def set_service(service_name)
  #   @service = system.service service_name
  # end

end
