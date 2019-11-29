module Server
  class Api
    module App
      module Controllers

        get '/download/service/:service_name' do

        # rescue Error::NotAuthenticated, Error::Timeout
        # #           redirect '/'

          filename = "Engines #{ params[:service_name] } export #{ Time.now.strftime("%Y-%m-%d %H:%M:%S") }.zip"
          route = "/containers/service/#{ params[:service_name] }/export"

          content_type 'application/zip'
          attachment filename

          stream do |out|
            logger.info "Service export stream started."
            begin
              @engines.stream_chunks( route ) do |chunk|
                # raise Error::NotAuthenticated if line == 'Invalid Token'
                # line = nil if line == '.'
                out.write chunk
                out.flush
              end
              logger.info "Service export stream complete."
            rescue IOError => e
              logger.info "Service export stream lost its connection with user agent."
            rescue => e
              error_message = "Service export stream error. #{ e }"
              logger.error error_message
            ensure
              out.close unless out.closed?
            end
          end

        end

        get '/download/test' do

          filepath = 'test/sample_file_for_download_test.zip'

          content_type 'application/zip'
          attachment "sample_file.zip"
          response['Content-Length'] = File.size( filepath ).to_s

          stream do |out|
            logger.info "Test download stream started."
            begin
              File.open( filepath, 'rb' ) do |f|
                until f.eof? do
                  puts "Download test: do a chunk"
                  out.write( f.read( 1048576 ) )
                  out.flush
                  sleep 0.5
                end
              end
              logger.info "Test download stream complete."
            rescue IOError => e
              logger.info "Test download stream lost its connection with user agent."
            rescue => e
              error_message = "Test download stream error. #{ e }"
              logger.error error_message
            ensure
              out.close unless out.closed?
            end
          end

        end



      end
    end
  end
end
