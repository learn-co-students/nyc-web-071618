class Cow < ApplicationRecord
  belongs_to :farmer
  validates(:name, {uniqueness: true})

end
