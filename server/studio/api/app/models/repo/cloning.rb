module Server
  class Api
    module App
      module Models
        class Repo
          class Cloning

            def initialize( url, destination ) #, namespace )
              @url = url
              @destination = destination
              # @namespace = namespace
            end

            attr_reader :url, :destination #, :namespace

            def process
              reset
              clone
              check
              move
              return id
            end

            def clone
              stdout, stderr, status = Open3.capture3( "git -C '#{ tmp }' clone '#{ @url }'" )
              raise Error::RepoCloneFailed.new stderr if status.exitstatus != 0
            end

            def name
              Dir.glob( "#{ tmp }/*" )[0].sub( "#{ tmp }/", '' )
            end

            # def namespaced_name
            #   namespace ? "#{ namespace }/#{ name }" : name
            # end

            def id
              @id ||= Digest::MD5.hexdigest name
            end

            def check
              raise Error::RepoAlreadyExists.new name if File.exist? path
              FileUtils.mkpath path
            end

            def path
              "#{ destination }/#{ id }"
            end

            def move
              FileUtils.mv Dir.glob( "#{ tmp }/*" ), path
            end

            def tmp
              'tmp/clone'
            end

            def reset
              FileUtils.rm_rf tmp
              FileUtils.mkpath tmp
            end

          end
        end
      end
    end
  end
end
