class V0
  module Api
    module Controllers


      get '/power/meters' do
        response['Access-Control-Allow-Origin'] = '*'
        test_meters
      end

      get '/power/meters/:id' do
        response['Access-Control-Allow-Origin'] = '*'
        id = params[:id].to_i
        return 404 if id < 1 || id > test_meters.length
        result = test_meters[ id - 1 ]
        result[:consumption] = random_meter_data
        result
      end

    end
  end
end
