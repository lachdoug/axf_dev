# module Server
#   class Client
#     class Distribution
#
#       require 'uglifier'
#
#       def initialize( version=nil )
#         @version = version
#       end
#
#       def path
#         raise "Version can't be blank" if @version === nil
#         @path ||= "axf/release/#{@version}"
#       end
#
#       def process
#         if Dir.exist? path
#           raise "Release #{@version} already exists!"
#         else
#           process!
#         end
#       end
#
#       def process!
#         if Dir.exist? path
#           FileUtils.rm_r path
#         end
#         puts "Building release #{@version}"
#         Dir.mkdir path
#         Dir.mkdir "#{path}/axf"
#         Dir.mkdir "#{path}/plugins"
#         File.write( "#{path}/axf/axf.js", axf )
#         File.write( "#{path}/axf/axf.min.js", axf_min )
#         File.write( "#{path}/plugins/plugins.js", plugins )
#         File.write( "#{path}/plugins/plugins.min.js", plugins_min )
#         `jsdoc --readme axf/src/axf/README.md #{path}/axf/axf.js -d #{path}/docs/axf`
#         `jsdoc #{path}/plugins/plugins.js -d #{path}/docs/plugins`
#       end
#
#       def axf
#         @axf ||= concatenate( [ './axf/src/axf/**/*.js' ] )
#       end
#
#       def axf_min
#         @axf_min ||= minify axf
#       end
#
#       def plugins
#         concatenate( [
#           './axf/src/plugins/axf-form/**/*.js',
#
#           './axf/src/plugins/axf-appkit/**/*.js',
#           './axf/src/plugins/axf-appkit-form-async/**/*.js',
#           './axf/src/plugins/axf-appkit-form-field/**/*.js',
#           './axf/src/plugins/axf-appkit-form-field-dependent/**/*.js',
#           './axf/src/plugins/axf-appkit-form-field-nest/**/*.js',
#           './axf/src/plugins/axf-appkit-form-field-nest-prefab/**/*.js',
#
#           './axf/src/plugins/axf-appkit-report-field/**/*.js',
#           './axf/src/plugins/axf-appkit-report-field-dependent/**/*.js',
#           './axf/src/plugins/axf-appkit-report-field-nest/**/*.js',
#           './axf/src/plugins/axf-appkit-report-field-nest-prefab/**/*.js',
#
#           './axf/src/plugins/axf-appkit-bootstrap/**/*.js',
#
#           './axf/src/plugins/axf-appkit-form-field-extras/**/*.js',
#
#           './axf/src/plugins/axf-dropdown/**/*.js',
#           './axf/src/plugins/axf-xtermjs/**/*.js',
#           # './axf/src/plugins/axf-appkit-theme-base/**/*.js',
#           './axf/src/plugins/axf-codemirror/**/*.js',
#           './axf/src/plugins/axf-appkit-jsoneditor/**/*.js',
#           './axf/src/plugins/axf-markedjs/**/*.js',
#           './axf/src/plugins/axf-chartjs/**/*.js',
#           './axf/src/plugins/axf-appkit-simplemde/**/*.js',
#           # './axf/src/plugins/axf-appkit-quilljs/**/*.js',
#           # './axf/src/plugins/axf-html5-sortable/**/*.js',
#           './axf/src/plugins/axf-panes/**/*.js',
#           # './axf/src/plugins/axf-timeago/**/*.js',
#           './axf/src/plugins/axf-dropzonejs/**/*.js',
#           # './axf/src/plugins/axf-filepond/**/*.js',
#         ] )
#       end
#
#       def plugins_min
#         minify plugins
#       end
#
#       def client
#         concatenate( [ './client/**/*.js' ] )
#       end
#
#       def client_min
#         minify client
#       end
#
#       def concatenate( sources )
#         ["'use strict'"].tap do |result|
#           sources.each do |source|
#             files_from( source ).each do |file|
#               result << File.read( file )
#             end
#           end
#         end.join("\n")
#       end
#
#       def minify( javascript )
#         Uglifier.compile javascript, harmony: true
#       end
#
#       def files_from( source )
#         Dir.glob( [ source ] ).select { |file| puts file; File.file?(file) }.sort{ |a, b| a.count('/') <=> b.count('/') }
#       end
#
#     end
#   end
# end
