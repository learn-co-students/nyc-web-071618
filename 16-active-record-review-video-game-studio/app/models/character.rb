class Character < ActiveRecord::Base
  has_many :character_video_games
  has_many :video_games, through: :character_video_games
end
