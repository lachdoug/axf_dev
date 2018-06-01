class V0
  module Api
    module Controllers

      test_meters = [
        { id: 1, name: "TV" },
        { id: 2, name: "Oven" },
      ]

      get '/meters' do
        test_meters
      end

      get '/meters/:id' do
        id = params[:id].to_i
        return 404 if id < 1 || id > test_meters.length
        test_meters[ id - 1 ]
      end

    end
  end
end
