class Server < Sinatra::Base

  set sessions: true
  set logging: Sinatra::Base.development?
  set dump_errors: Sinatra::Base.development?

  require './server/app'
  register App::Controllers
  helpers App::Helpers


  ## Default content type to JSON

  before do
    content_type :json
  end

  after do
    response.body = JSON.pretty_generate( response.body ) if
      ( content_type == "application/json" ) &&
      not( response.body.is_a? String )
  end


end
