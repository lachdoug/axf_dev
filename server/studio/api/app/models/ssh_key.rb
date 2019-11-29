# module Server
#   class Api
#     module App
#       module Models
#         class SshKey
#
#           def initialize(settings)
#             @settings = settings
#           end
#
#           def public_key
#             File.read public_key_filepath
#           end
#
#           def private_key_filepath
#             "#{ Dir.home }/.ssh/#{ @settings.ssh_private_key_filename }"
#           end
#
#           def public_key_filepath
#             "#{ Dir.home }/.ssh/#{ @settings.ssh_public_key_filename }"
#           end
#
#         end
#       end
#     end
#   end
# end
