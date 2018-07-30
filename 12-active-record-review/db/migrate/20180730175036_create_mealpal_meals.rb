class CreateMealpalMeals < ActiveRecord::Migration[5.2]
  def change
    create_table :mealpal_meals do |t|
      t.integer :customer_id
      t.integer :restaurant_id
    end
  end
end
