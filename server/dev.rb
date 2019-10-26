module Server
  class Dev < Sinatra::Base

    require 'logger'

    set logging: Sinatra::Base.development? ? Logger::DEBUG : Logger::INFO,
        dump_errors: Sinatra::Base.development?

    get '' do
      erb :'dev.html'
    end

    get '/dev.js' do
      content_type :'application/javascript'
      dev_js
    end

    def dev_js
      concatenate( [ './dev/**/*.js' ] )
    end

    def concatenate( sources )
      ["'use strict'"].tap do |result|
        sources.each do |source|
          files_from( source ).each do |file|
            result << File.read( file )
          end
        end
      end.join("\n")
    end

    def files_from( source )
      Dir.glob( [ source ] ).select { |file| puts file; File.file?(file) }.sort{ |a, b| a.count('/') <=> b.count('/') }
    end

    post '*' do
      # path = request.fullpath
      # debugger
      # params
      sleep 2
      params.delete :splat
      "<i>POST #{ request.fullpath }</i>" \
      "<pre>#{ JSON.pretty_generate( params ) }</pre>"
    end

    not_found do
      content_type :text
      "Not found: #{ request.request_method } '#{ request.path_info }'."
    end

  end
end
