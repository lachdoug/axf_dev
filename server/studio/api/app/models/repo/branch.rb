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
              return 'master' if repo.empty?
              git_branch.match(/\*\s*(\w+)/)[1]
            end

            def git_branch
              @git_branch ||= repo.git 'branch'
            end

            def branches
              @branches ||= git_branch.scan( /\w+/ )
            end

            def set( name )
              if branches.include? name
                {
                  current: name,
                  message: repo.git( "checkout #{ name }" )
                }
              else
                {
                  current: name,
                  message: repo.git( "checkout -b #{ name }")
                }
              end
            end

            def remove( name )
              {
                name: name,
                message: repo.git( "branch -D #{ name }" ),
              }
            end

          end
        end
      end
    end
  end
end
