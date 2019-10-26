require 'sinatra/base'
require 'sinatra/extension'
require 'sinatra/json'
require 'sinatra/streaming'
require 'sinatra/cookies'

require 'yaml'

require './server'

# require './server/app'
# register App::Controllers
# helpers App::Helpers

Dir.glob( './tasks/**/*.rake' ).each { |file| load file }

# load './tasks/release.rake'

task default: [:release]

# task :build do
#   puts 'Rake OK'
# end
