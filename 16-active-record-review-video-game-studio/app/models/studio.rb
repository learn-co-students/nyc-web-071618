class Studio < ActiveRecord::Base
  has_many :video_games
  has_many :characters, through: :video_games
end
