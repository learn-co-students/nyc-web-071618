class Turkey < ApplicationRecord
  validates(:name, { presence: true })
  validates :weight, numericality: {minimum: 100}
  validate :name_with_x


  def name_with_x
    # self is the instance of the turkey we wish to create
    unless self.name.include?('x')
      # we MUST add an error in order for the .valid? method to work properly
      errors.add(:name, 'Must include the letter X')
    end
  end
end
