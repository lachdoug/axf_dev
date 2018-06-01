class V0
  module Api
    module Helpers

      def test_params
        result = {}
        result[:action] = params[:splat][0]
        result[:method] = request.request_method
        result[:params] = {}
        params.each { |k,v|
          result[:params][k] = v if k != "captures" && k != "splat"
        }
        result
      end

    end
  end
end
