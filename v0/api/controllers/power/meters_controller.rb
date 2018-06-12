class V0
  module Api
    module Controllers

      test_meters = [
        { id: 1, name: "TV" },
        { id: 2, name: "Oven" },
      ]



      get '/power/meters' do
        test_meters
      end

      get '/power/meters/:id' do
        id = params[:id].to_i
        return 404 if id < 1 || id > test_meters.length
        result = test_meters[ id - 1 ]
        result[:consumption] = random_meter_data
      end

    end
  end
end
