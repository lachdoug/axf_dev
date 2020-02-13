require 'sinatra/base'
require 'sinatra/extension'
require 'sinatra/json'
require 'sinatra/cookies'
require 'sinatra/streaming'
require 'byebug' if Sinatra::Base.development?

require 'logger'

log_dir = "log"
Dir.mkdir(log_dir) unless Dir.exists?(log_dir)
file = File.new("#{log_dir}/#{Sinatra::Base.environment}.log", 'a+')
file.sync = true
use Rack::CommonLogger, file
# configure do
# end

require './server'
map('/axfunction') { run Server::Assets }
map('/node_modules') { run Rack::Directory.new('node_modules') }

if ( Sinatra::Base.development? )
  puts "Which app mode? 0 for Ax, 1 for System, 2 for Studio."
  answer = $stdin.gets.chomp
  if answer == '0'
    mode = 'axf'
  elsif answer == '1'
    mode = 'system'
  elsif answer == '2'
    mode = 'studio'
  else
    puts "Invalid selection."
    exit false
  end
else
  mode = ENV['MODE'] || 'system'
end

require_relative "server/#{ mode }"
map('/~') { run Server::Api }
map('/') { run Server::Client }

Server.warmup( self )
