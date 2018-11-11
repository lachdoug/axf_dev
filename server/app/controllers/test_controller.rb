class Server
  module App
    module Controllers

      test_people = [
        { first_name: "Bre", last_name: "Lander", age: 39, registered: true, pets: [ "Dog", "Cat" ], sports: ["Golf", "Football"], golf: [ 0, 1 ] },
        { first_name: "Jihun", last_name: "Son", age: 26, pets: [ "Cat" ] },
        { first_name: "Jack", last_name: "Anderson", age: 45, pets: [ "Fish" ] },
        { first_name: "Sally", last_name: "Jones", age: 31, pets: [ "Cat" ] },
        { first_name: "Alan", last_name: "Lee", age: 25, pets: [ "Dog", "Fish" ] },
      ]

      get '/test/people' do
        test_people
      end

      get '/test/people/:id' do
        id = params[:id].to_i
        return 404 if id < 1 || id > test_people.length
        test_people[ id - 1 ]
      end

      post '*' do
        test_params
      end



    end
  end
end
