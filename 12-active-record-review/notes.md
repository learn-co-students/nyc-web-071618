### Create the Relationships

Customer has_many restaurants, through: :Mealpal

Restaurant has_many customers, through: :Mealpal

Mealpal -- join table
Mealpal belongs to Customer
Mealpal belongs to Restaurant

### Create the models
Customer
Restaurant
Mealpal
#### Test - rake :console
### Bundle install
### Create the migrations
```
rake db:create_migration NAME=create_customers
rake db:create_migration NAME=create_restaurants
rake db:create_migration NAME=create_mealpal_meals
```
#### Test
### Create table details
```ruby
create_table :customers do |t|
  t.string :name
end
```
#### Test
### Migrate
```
rake db:migrate
```
#### Test -- Look at the schema.
### Create the Seeds!
#### Test
```ruby
# Dont forget to drop the
# ClassName.destroy_all
puts " Making magical restaurants"
Restaurant.create(name: Faker::HarryPotter.location, rating: 5, cuisine: 'magical')
Restaurant.create(name: Faker::HarryPotter.location, rating: 5, cuisine: 'magical')
Restaurant.create(name: Faker::HarryPotter.location, rating: 4, cuisine: 'magical')
Restaurant.create(name: Faker::HarryPotter.location, rating: 3, cuisine: 'magical')
puts " DONE with those restos!"
puts " Making magical Customers"
Customer.create(name: Faker::HarryPotter.character)
Customer.create(name: Faker::HarryPotter.character)

puts "donezo"
puts "No one told me about Meal pal"
MealpalMeal.create(customer_id: 1, restaurant_id: 2)
MealpalMeal.create(customer_id: 2, restaurant_id: 3)
MealpalMeal.create(customer_id: 2, restaurant_id: 1)
MealpalMeal.create(customer_id: 1, restaurant_id: 1)
MealpalMeal.create(customer_id: 3, restaurant_id: 2)
puts " SEEDED THAT DATABASE!! "
```

### Test the Seeds / Models / Associations
```
rake console
Restaurant.first.customers
Restaurant.first.mealpal_meals
```
#### Test
### Get the party Started!
#### Test
