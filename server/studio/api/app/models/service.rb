module Server
  class Api
    module App
      module Models
        class Service

          def initialize( namespace_id, id )
            @namespace_id = namespace_id
            @id = id
          end

          attr_reader :namespace_id, :id

          def namespace
            @namespace ||= Namespace.new namespace_id
          end

          def to_json
            to_h.to_json
          end

          def to_h
            {
              id: id,
              name: name,
              namespace: namespace.name,
              remote: repo.remote,
              branch: repo.branch.current,
              # readme: readme.content,
              # blueprint: blueprint,
            }
          end

          def repo
            @repo ||= Repo.new( self )
          end

          def readme
            @readme ||= Readme.new( self )
          end

          def license
            @license ||= License.new( self )
          end

          def blueprint
            @blueprint ||= Blueprint.new( self )
          end

          def parent_dir
            @parent_dir ||= "data/workspaces/#{ namespace_id }/services/#{ id }"
          end

          def name
            raise Error::NoRecord.new id unless parent_dir
            @name ||= repo_dir.sub( "#{parent_dir}/", '' )
          end

          def repo_dir
            Dir.glob( "#{parent_dir}/*" )[0]
          end

          def active
            !repo.localDiff.empty?
          end

          def delete
            FileUtils.rm_rf parent_dir
            {}
          end

        end
      end
    end
  end
end




# debugger

            #   return ''
            # else
            #   status = 403
#             pattern = /^(([^:\/?#]+):)?(\/\/([^\/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?/
#             match = url.match( pattern )
#
#             scheme    = match[2]
#             authority = match[4]
#             path      = match[5]
#             query     = match[7]
#             fragment  = match[9]
#
# debugger
#
#
#             git_cmd = "GIT_SSH_COMMAND='ssh -oPort=#{
#               port.present? ? port : 22
#             } -i #{
#               Rails.application.config.ssh_private_key_filename
#             } -o StrictHostKeyChecking=no'"
            #
            #   remote = "#{ user }@#{ host }:#{ path }"
            #
            #   destination = "#{
            #     Rails.application.config.persistent_data_directory
            #   }/repos/#{
            #     type_plural
            #   }"
            #
            #   stdout, stderr, status = Open3.capture3(
            #     "#{ git_cmd } git -C #{
            #       destination
            #     } clone '#{ remote }'")
            #
            #   if status.exitstatus == 0
            #
            #     repo_name = path.split('/')[-1].split('.')[0]
            #
            #     config = {
            #       port: port,
            #     }
            #     config_filepath = "#{destination}/#{repo_name}/config.yaml"
            #     File.write( config_filepath, config.to_yaml )
            #
            #     gitignore_filepath = "#{destination}/#{repo_name}/.gitignore"
            #     gitignore = "config.yaml\n.gitignore"
            #     File.write( gitignore_filepath, gitignore )
            #
            #     { success: true }
            #
            #   else
            #
            #     { success: false, message: stderr.split('fatal: ')[1] } || stderr
            #
            #   end

# ,
# ssh_public_key: File.read( config.ssh_public_key_filename )
#
#
# config.ssh_private_key_filename = "#{
# Dir.home
# }/.ssh/#{
# ENV['ENGINES_DEVELOPER_STUDIO_SHH_PRIVATE_KEY_FILENAME'] || "identity"
# }"
#
# config.ssh_public_key_filename = "#{
# Dir.home
# }/.ssh/#{
# ENV['ENGINES_DEVELOPER_STUDIO_SHH_PUBLIC_KEY_FILENAME'] || "identity.pub"
# }"
#
# config.public_key = File.read( config.ssh_public_key_filename )
#




            # return match.to_json

          # end

          # def self.clone(url, type_plural)
          #   regex = /^(ssh:\/\/|)([^@]*)@([^:]*):(\d*|)(.*)$/
          #   scheme, user, host, port, path = url.match( regex ).captures
          #
          #   git_cmd = "GIT_SSH_COMMAND='ssh -oPort=#{
          #       port.present? ? port : 22
          #     } -i #{
          #       Rails.application.config.ssh_private_key_filename
          #     } -o StrictHostKeyChecking=no'"
          #
          #   remote = "#{ user }@#{ host }:#{ path }"
          #
          #   destination = "#{
          #     Rails.application.config.persistent_data_directory
          #   }/repos/#{
          #     type_plural
          #   }"
          #
          #   stdout, stderr, status = Open3.capture3(
          #     "#{ git_cmd } git -C #{
          #       destination
          #     } clone '#{ remote }'")
          #
          #   if status.exitstatus == 0
          #
          #     repo_name = path.split('/')[-1].split('.')[0]
          #
          #     config = {
          #       port: port,
          #     }
          #     config_filepath = "#{destination}/#{repo_name}/config.yaml"
          #     File.write( config_filepath, config.to_yaml )
          #
          #     gitignore_filepath = "#{destination}/#{repo_name}/.gitignore"
          #     gitignore = "config.yaml\n.gitignore"
          #     File.write( gitignore_filepath, gitignore )
          #
          #     { success: true }
          #
          #   else
          #
          #     { success: false, message: stderr.split('fatal: ')[1] } || stderr
          #
          #   end
          #
          # end
          #
          # attr_reader :engine
          #
          # def initialize(engine)
          #   @engine = engine
          # end
          #
          # def blueprint
          #   @blueprint ||= RepoBlueprint.new(self)
          # end
          #
          # def readme
          #   @readme ||= RepoReadme.new(self)
          # end
          #
          # def release_notes
          #   @release_notes ||= RepoReleaseNotes.new(self)
          # end
          #
          # def license
          #   @license ||= RepoLicense.new(self)
          # end
          #
          # def path
          #   "#{Rails.application.config.persistent_data_directory}/repos/#{engine.class.to_s.underscore.pluralize}/#{engine.name}"
          # end
          #
          # def precheck
          #   blueprint.precheck
          #   readme.precheck
          #   release_notes.precheck
          #   license.precheck
          #   git_precheck
          # end
          #
          # def git_precheck
          #   do_initial_commit_and_push if git_is_bare
          # end
          #
          # def git_is_bare
          #   stdout, stderr, status = Open3.capture3("git -C #{path} cat-file -t HEAD")
          #   status.exitstatus == 128
          # end
          #
          # def port
          #   port_config = YAML.load_file( "#{ path }/config.yaml" )[:port]
          #   port_config.present? ? port_config : 22
          # rescue Errno::ENOENT # no config.yaml in some old repos
          #   22
          # end
          #
          # def uncommitted_diffs
          #   @uncommitted_diffs ||= `git -C #{path} diff HEAD`
          # end
          #
          # def committed_diffs
          #   @committed_diffs ||= `git -C #{path} diff origin/master..HEAD`
          # end
          #
          # def remote_url
          #   `git -C #{path} remote get-url origin`
          # end
          #
          # def log
          #   `git -C #{path} log`
          # end
          #
          # def last_commit_message
          #   `git -C #{path} log -1`.split("\n")[4..-1].map{|line| line[1..-1]}.join("\n")
          # end
          #
          # def status
          #   `git -C #{path} add . ; git -C #{path} status`.
          #   sub( "  (use \"git push\" to publish your local commits)\n", '' ).
          #   sub( "  (use \"git reset HEAD <file>...\" to unstage)\n", '' ).
          #   sub("\n\n", "\n").sub("\n\n", "\n") + ( committed_diffs.present? ?
          #             "There are unpushed commits": "No unpushed commits")
          # end
          #
          # def do_initial_commit_and_push
          #   add_files_to_repo
          #   commit 'Initial commit'
          #   set_remote_branch
          #   push
          # end
          #
          # def add_files_to_repo
          #   `git -C #{path} add -A`
          # end
          #
          # def set_remote_branch
          #   `git -C #{path} branch --unset-upstream`
          #   `git -C #{path} branch --set-upstream-to origin/master`
          # end
          #
          # def commit(message)
          #   stdout, stderr, status = Open3.capture3("git -C #{path} commit -m '#{message}'")
          #   if status.exitstatus == 0
          #     { success: true }
          #   else
          #     { success: false, message: stderr }
          #   end
          # end
          #
          # def git_ssh_command
          #   "GIT_SSH_COMMAND='ssh -oPort=#{
          #       port
          #     } -i #{
          #       Rails.application.config.ssh_private_key_filename
          #     } -o StrictHostKeyChecking=no'"
          # end
          #
          # def push
          #   stdout, stderr, status = Open3.capture3("#{ git_ssh_command } git -C #{path} push -f origin master")
          #   if status.exitstatus == 0
          #     { success: true }
          #   else
          #     { success: false, message: stderr }
          #   end
          # end
          #
          # def delete
          #   FileUtils.rm_rf path
          # end
