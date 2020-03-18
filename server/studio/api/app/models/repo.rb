module Server
  class Api
    module App
      module Models
        class Repo

          def self.create( params )
            Clone.new( params[:url], params[:path] ).process
          end

          def initialize( owner )
            @owner = owner
          end

          attr_reader :owner

          # def to_json
          #   to_h.to_json
          # end
          #
          # def to_h
          #   debugger
          #   {
          #     status: status,
          #     branch: branch.current,
          #     remote: remote,
          #     diff: diff,
          #     # empty: empty?,
          #   }
          # end

          def remote
            @remote ||= git( 'remote get-url origin' ).strip
          end

          def read( filepath )
            File.read "#{ path }/#{ filepath }"
          end

          def write( filepath, content )
            File.write "#{ path }/#{ filepath }", content
          end

          def delete( filepath )
            FileUtils.rm_rf "#{ path }/#{ filepath }"
            compact
            {}
          end

          def path
            @path ||= owner.repo_dir
          end

          def branch
            @branch ||= Branch.new self
          end

          def diff
            {
              uncommitted: !uncommitted.empty?,
              unpushed: !unpushed.empty?,
            }
          end

          def status
            @status ||= git 'status --porcelain'
          end

          def reset
            { message: git( 'reset --hard origin/master' ) }
          end

          def pull
            { message: git( "pull origin #{ branch.current }" ) }
          end

          def commit( commit )
            return { message: 'Nothing to commit.' } if uncommitted.empty?
            git 'add -A'
            { message: git( "commit -m #{ commit[:message] }" ) }
          end

          def push
            return { message: 'Nothing to push.' } if unpushed.empty?
            { message: git( "push -u origin #{ branch.current }" ) }
          end

          def git( command )
            stdout, stderr, status = Open3.
              capture3( "git -C '#{ path }' #{ command }" )
              result = stdout === '' ?
                stderr :
                stderr === '' ? stdout : "#{ stdout }\n#{ stderr }"
            raise Error::GitError.new result unless status.exitstatus === 0
            result
          end

          def dirty?
            !clean?
          end

          def clean?
            uncommitted.empty? && unpushed.empty?
          end

          def unpushed
            git( 'diff origin..HEAD' )
          end

          def uncommitted
            git( 'diff HEAD' )
          end

          def refs
            @refs ||= git 'rev-parse --all'
          end

          def compact
            Dir.glob( "#{ path }/**/*" ).select do |entry|
              File.directory? entry
            end.select do |entry|
              ( Dir.entries( entry ) - %w[ . .. ] ).empty?
            end.each do |entry|
              Dir.rmdir entry
            end
          end

        end
      end
    end
  end
end
