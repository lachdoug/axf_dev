class Server
  module App
    module Controllers

      test_people = [
        {
          first_name: "Bre",
          last_name: "Lander",
          accepted: "on",
          home: "https://www.example.com/bre",
          profile: {
            age: 39,
            email_addresses: [ "test@example.com", "test2@example.com" ]
          },
          roles: [
            { title: "CEO", appointed: "2016-1-5" },
            { title: "Head chef", appointed: "2014-10-9" }
          ],
          joined: "2017-10-10",
          registered: true,
          pets: [ "Dog", "Cat" ],
          sports: ["Golf", "Football"],
          golf: [ 0, 1 ],
          icon: "data:image/gif;base64,R0lGODlhEAAOALMAAOazToeHh0tLS/7LZv/0jvb29t/f3//Ub//ge8WSLf/rhf/3kdbW1mxsbP//mf///yH5BAAAAAAALAAAAAAQAA4AAARe8L1Ekyky67QZ1hLnjM5UUde0ECwLJoExKcppV0aCcGCmTIHEIUEqjgaORCMxIC6e0CcguWw6aFjsVMkkIr7g77ZKPJjPZqIyd7sJAgVGoEGv2xsBxqNgYPj/gAwXEQA7",
          avatar: "https://www.w3schools.com/tags/smiley.gif",
          video: "https://www.w3schools.com/tags/movie.mp4",
          audio: "https://www.w3schools.com/tags/horse.ogg",
        },
        { first_name: "Jihun", last_name: "Son", accepted: "on", home: "https://www.example.com/jihun", profile: { age: 26, email_addresses: [ "test@example.com", "test2@example.com" ] }, roles: [ { title: "Barman", appointed: "2016-1-5" }, { title: "Waiter", appointed: "2013-9-12" } ], joined: "2017-10-10", pets: [ "Cat" ] },
        { first_name: "Jack", last_name: "Anderson", home: "https://www.example.com/jack", profile: { age: 45, email_addresses: [ "test@example.com", "test2@example.com" ] }, roles: [ { title: "CFO", appointed: "2016-1-5" } ], joined: "2017-10-10", pets: [ "Fish" ] },
        { first_name: "Sally", last_name: "Jones", home: "https://www.example.com/sally", profile: { age: 31, email_addresses: [ "test@example.com", "test2@example.com" ] }, roles: [ { title: "Bulding services", appointed: "2016-1-5" }, { title: "Security", appointed: "2017-9-9" } ], joined: "2017-10-10", pets: [ "Cat" ] },
        { first_name: "Alan", last_name: "Lee", home: "https://www.example.com/alan", profile: { age: 25, email_addresses: [ "test@example.com", "test2@example.com" ] }, roles: [ { title: "Company secretary", appointed: "2016-1-5" }, { title: "HR manager", appointed: "2014-1-9" } ], joined: "2017-10-10", pets: [ "Dog", "Fish" ] },
      ]

      get '/test/people' do
        test_people
      end

      get '/test/people/:id' do
        id = params[:id].to_i
        return 404 if id < 0 || id > test_people.length - 1
        test_people[ id ]
      end

      post '*' do
        test_params
      end



    end
  end
end
