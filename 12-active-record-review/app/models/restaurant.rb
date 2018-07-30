class Restaurant < ActiveRecord::Base
  has_many :mealpal_meals
  has_many :customers, through: :mealpal_meals

end
