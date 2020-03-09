# module Server
#   class Api
#     module App
#       module Controllers
#
#         get '/settings' do
#           content_type :'application/json'
#           Settings.new( @current_user ).to_json
#         end
#
#       end
#     end
#   end
# end
