class Server
  module App

    module Models
      Dir.glob( [ "./server/app/models/**/*.rb" ] ).each { |file| require file }
    end

    module Services
      Dir.glob( [ "./server/app/services/**/*.rb" ] ).each { |file| require file }
    end

    module Helpers
      Dir.glob( [ "./server/app/helpers/**/*.rb" ] ).each { |file| require file }
    end

    module Controllers
      include Models
      include Services
      extend Sinatra::Extension
      Dir.glob( [ "./server/app/controllers/**/*.rb" ] ).each { |file| require file }
    end

  end
end
