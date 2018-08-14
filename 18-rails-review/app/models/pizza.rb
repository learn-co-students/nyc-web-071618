class Pizza < ApplicationRecord
  validates :toppings, presence: :true
  validates :price, numericality: { greater_than_or_equal_to: 1 }
  # custom validations
  validate :size_must_be_large

  def size_must_be_large
    unless self.size == 'large'
      self.errors.add(:size, 'MUST BE LARGE')
    end
  end
end
