class Server < Sinatra::Base

  set sessions: true,
      logging: Sinatra::Base.development?,
      dump_errors: Sinatra::Base.development?,
      show_exceptions: false,
      elasticsearch_host_url: ENV['ELASTICSEARCH_HOST_URL']

  require './server/app'

  register App::Controllers
  helpers App::Helpers

  before do
    # Default content type to JSON
    if request.path_info.match /^\/api\/?/
      content_type :json
      body = request.body.read
      # debugger
      params.merge!( JSON.parse( body ) ) unless body.empty?
    end
  end

  after do
    if response.content_type === "application/json"
      response.body = JSON.pretty_generate( response.body )
    end
  end

  class ApiError < StandardError

    attr_reader :status, :msg

    def initialize( msg, status )
      @msg = msg
      @status = status
    end

  end

  not_found do
    # Return index.html unless api call
    pass if request.path_info.match /^\/api\/?|^\/assets\//
    pass unless request.request_method === "GET"
    status 200
    erb :'index.html'
  end

  error ApiError do |e|
    debugger
    status e.status
    e.msg
  end

end
