namespace :release do

  task :build, [ :version ] do | task, args |
    @distribution = Server::App::Models::Distribution.new( args.version )
    @distribution.process
  end

  task :overwrite, [ :version ] do | task, args |
    @distribution = Server::App::Models::Distribution.new( args.version )
    @distribution.process!
  end

end
