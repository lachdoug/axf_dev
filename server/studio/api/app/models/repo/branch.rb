module Server
  class Api
    module App
      module Models
        class Repo
          class Branch

            def initialize( repo )
              @repo = repo
            end

            attr_reader :repo

            def to_h
              {
                current: current,
                all: branches,
                status: git_branch,
              }
            end

            def to_json
              to_h.to_json
            end

            def path
              repo.path
            end

            def current
              @current ||= git_branch.match(/\*\s*(\w+)/)[1]
            end

            def git_branch
              @git_branch ||= `git -C '#{ path }' branch`
            end

            def branches
              @branches ||= git_branch.scan( /\w+/ )
            end

            def set( name )
              if branches.include? name
                `git -C '#{ path }' checkout #{ name }`
              else
                `git -C '#{ path }' checkout -b #{ name }`
              end
            end

            def remove( name )
              # if branches.include? name
                `git -C '#{ path }' branch -D #{ name }`
              # else
              #   `git -C '#{ path }' checkout -b #{ name }`
              # end
            end



          end
        end
      end
    end
  end
end
