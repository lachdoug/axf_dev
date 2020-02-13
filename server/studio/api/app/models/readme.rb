module Server
  class Api
    module App
      module Models
        class Readme

          def initialize( owner )
            @owner = owner
          end

          attr_reader :owner

          def content
            owner.repo.read 'README.md'
          rescue Errno::ENOENT
            return ''
          end

          def to_json
            to_h.to_json
          end

          def to_h
            {
              # branch: owner.repo.branch.current,
              content: content,
            }
          end

          def update( params )
            owner.repo.write 'README.md', params[:content]
            {}
          end

        end
      end
    end
  end
end
