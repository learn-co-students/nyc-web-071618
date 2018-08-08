class VideoGame < ActiveRecord::Base
  belongs_to(:studio)
  has_many :character_video_games
  has_many(:characters, { through: :character_video_games })
  # belongs_to :studio
end
