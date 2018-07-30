class Customer < ActiveRecord::Base
  has_many :mealpal_meals
  has_many :restaurants, through: :mealpal_meals

end
