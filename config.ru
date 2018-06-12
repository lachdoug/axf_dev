require 'sinatra/base'
require 'sinatra/extension'
require 'sinatra/json'
# require "sinatra/streaming"

# require 'tempfile'
# require 'rest-client'
require 'byebug' if Sinatra::Base.development?
# require 'yaml'
require 'sprockets'

require_relative 'v0/module'
map('/') { run V0 }

# map '/assets' do
#   # byebug
#   environment = Sprockets::Environment.new
#   environment.append_path 'v0/client/lib'
#   # environment.append_path 'assets/stylesheets'
#   run environment
# end
