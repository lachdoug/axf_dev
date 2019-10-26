# module Server
#   class Assets < Sinatra::Base
# # debugger
# #     set :public_folder, Proc.new {
# #       File.join( root, "assets/static" )
# #     }
# # debugger
#     require_relative 'assets/distribution'
#
#     get '/client.js' do
#       content_type :'application/javascript'
#       @distribution = Distribution.new
#       @distribution.client
#     end
#
#     get '/axfunction/axf.js' do
#       content_type :'application/javascript'
#       @distribution = Distribution.new
#       @distribution.axf
#     end
#
#     get '/axfunction/axf-plugins.js' do
#       content_type :'application/javascript'
#       @distribution = Distribution.new
#       @distribution.plugins
#     end
#
#   end
# end
