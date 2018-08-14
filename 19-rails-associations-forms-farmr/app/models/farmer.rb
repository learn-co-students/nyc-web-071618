class Farmer < ApplicationRecord0
  has_many :cows, dependent: :destroy
  accepts_nested_attributes_for :cows
end
