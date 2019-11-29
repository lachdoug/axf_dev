# module Setup
#
#   def self.mount( rack )
#
#     rack.map('/node_modules') { run Rack::Directory.new('node_modules') }
#     rack.map('/axfunction') { run Server::Assets }
#
#     if ( Sinatra::Base.development? )
#       puts "Which app mode? 1 for System, 2 for Studio."
#       answer = $stdin.gets.chomp
#       if answer == '1'
#         mode = 'gui'
#       else
#         mode = 'studio'
#       end
#     else
#       mode = ENV['MODE'] || 'gui'
#     end
#
#     if mode == 'gui'
#       require_relative '../system/api'
#       require_relative '../system/client'
#       rack.map('/~') { run Server::Api }
#       rack.map('/') { run Server::Client }
#     else
#       require_relative '../studio/api'
#       require_relative '../studio/client'
#       rack.map('/~') { run Server::Api }
#       rack.map('/') { run Server::Client }
#     end
#
#
#
#
#   end
#
# end
