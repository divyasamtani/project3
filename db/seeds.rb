# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

50.times do
  Restaurant.create(name: Faker::Hipster.word)

  User.create({
    name: Faker::Name.name,
    email: Faker::Internet.email,
    password: Faker::Internet.password(8)
  })

  ids = User.pluck(:id)
  # returns an array of all the id's in the table
  random_User = User.find(ids.sample)
  # sample gives a random ID from the array and returns a random User

  l_params = {
    title: Faker::Book.title,
    description: Faker::Lorem.sentence(3),
    user_id: random_User.id
  }

  l = List.create(l_params)

  # Generate Restaurant List assocation
  list_ids = List.pluck(:id)
  random_List = List.find(list_ids.sample)

  restaurant_ids = Restaurant.pluck(:id)
  random_Restaurant = Restaurant.find(restaurant_ids.sample)

  rl_params = {
    list_id: random_List.id,
    restaurant_id: random_Restaurant.id
  }

  r = RestaurantList.create(rl_params)

  ul_params = {
    list_id: random_List.id,
    user_id: random_User.id
  }

  b = ListBookmark.create(ul_params)

end