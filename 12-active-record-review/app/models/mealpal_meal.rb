class MealpalMeal < ActiveRecord::Base

  belongs_to :restaurant
  belongs_to :customer

end
