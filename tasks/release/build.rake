namespace :release do

  task :build do | version |
    require "server"
    puts App::Api::Models::Distribution.minified
  end

end
