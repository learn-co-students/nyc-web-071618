require 'faker'

Restaurant.destroy_all
Customer.destroy_all
# MealpalMeal.Destroy_all

puts " Making magical restaurants"
Restaurant.create(name: Faker::HarryPotter.location, rating: 5, cuisine: 'magical')
Restaurant.create(name: Faker::HarryPotter.location, rating: 5, cuisine: 'magical')
Restaurant.create(name: Faker::HarryPotter.location, rating: 4, cuisine: 'magical')
Restaurant.create(name: Faker::HarryPotter.location, rating: 4.5, cuisine: 'magical')
Restaurant.create(name: Faker::HarryPotter.location, rating: 1, cuisine: 'magical')
Restaurant.create(name: Faker::HarryPotter.location, rating: 1, cuisine: 'magical')
Restaurant.create(name: Faker::HarryPotter.location, rating: 3, cuisine: 'magical')
puts " DONE with those restos!"
puts " Making magical Customers"
Customer.create(name: Faker::HarryPotter.character)
Customer.create(name: Faker::HarryPotter.character)
Customer.create(name: Faker::HarryPotter.character)
Customer.create(name: Faker::HarryPotter.character)
Customer.create(name: Faker::HarryPotter.character)
Customer.create(name: Faker::HarryPotter.character)
puts "donezo"
puts "No one told me about Meal pal"
MealpalMeal.create(customer_id: 1, restaurant_id: 2)
MealpalMeal.create(customer_id: 2, restaurant_id: 1)
MealpalMeal.create(customer_id: 2, restaurant_id: 3)
MealpalMeal.create(customer_id: 1, restaurant_id: 4)
MealpalMeal.create(customer_id: 3, restaurant_id: 2)
MealpalMeal.create(customer_id: 4, restaurant_id: 1)
MealpalMeal.create(customer_id: 3, restaurant_id: 5)
puts " test please!"
