require 'sinatra/base'
require 'sinatra/extension'
require 'sinatra/json'
require 'sinatra/cookies'
require 'sinatra/streaming'
require 'logger'
require 'byebug' if Sinatra::Base.development?

log_dir = "log"
Dir.mkdir(log_dir) unless Dir.exists?(log_dir)
file = File.new("#{log_dir}/#{Sinatra::Base.environment}.log", 'a+')
file.sync = true
use Rack::CommonLogger, file

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

$SESSION_TIMEOUT_MINUTES = ENV['SESSION_TIMEOUT_MINUTES'] || 60

require_relative "server/#{ mode }"
map('/~') { run Server::Api }
map('/') { run Server::Client }

Server.warmup( self )
