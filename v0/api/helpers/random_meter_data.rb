class V0
  module Api
    module Helpers

      def test_meters
        [
          { id: 1, name: "TV" },
          { id: 2, name: "Oven" },
        ]
      end

      def random_meter_data
        [
          {
            history: random_months,
            monthToDate: random_month(0)
          }
        ]
      end

      def random_months
        [1,2,3,4,5,6,7,8,9,10,11,12].map { |months_ago| random_month(months_ago) }
      end

      def random_month(months_ago)
        t = Date.today
        # byebug
        year = t.year
        month = t.month - months_ago
        if month < 1
          month = 12 + month
          year = year - 1
        end
        date = Date.new( year, month )

        {
          date: date,
          consumption: Random.rand(10.0...20.0),
          target: Random.rand(10.0...20.0)
        }

      end

    end
  end
end
