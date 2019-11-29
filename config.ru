require 'sinatra/base'
require 'sinatra/extension'
require 'sinatra/json'
require 'sinatra/cookies'
require 'sinatra/streaming'
require 'byebug' if Sinatra::Base.development?

require './server'
map('/axfunction') { run Server::Assets }
map('/node_modules') { run Rack::Directory.new('node_modules') }


if ( Sinatra::Base.development? )
  puts "Which app mode? 1 for System, 2 for Studio."
  answer = $stdin.gets.chomp
  if answer == '1'
    mode = 'system'
  else
    mode = 'studio'
  end
else
  mode = ENV['MODE'] || 'system'
end


require_relative "server/#{ mode }"
map('/~') { run Server::Api }
map('/') { run Server::Client }

Server.warmup( self )
