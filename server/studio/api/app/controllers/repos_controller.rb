# module Server
#   class Api
#     module App
#       module Controllers
#
#
#         get '/repos' do
#           content_type :'application/json'
#           Repo.index.to_json
#         end
#
#         # post '/repos' do
#         #   @ssh_key = SshKey.new( settings )
#         #   content_type :'application/json'
#         #   Repo.create( params[:url], @ssh_key ).to_json
#         # end
#
#         get '/repos/:id' do
#           content_type :'application/json'
#           Repo.new( params[:id] ).show.to_json
#         end
#
#         # delete '/repos/:id' do
#         #   content_type :'application/json'
#         #   Repo.new( params[:id] ).delete.to_json
#         # end
#
#
#         # post '/repos' do
#         #   Repo.create( params.repo )
#         # end
#
#
#       end
#     end
#   end
# end
#
#
# # [
# #   { uri: 'git@github.com:EnginesBlueprints/Enginepad.git' }
# #   { uri: 'git@github.com:lachdoug/fake_app_blueprint.git' }
# # ]
