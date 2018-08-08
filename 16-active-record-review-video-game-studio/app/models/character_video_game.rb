class CharacterVideoGame < ActiveRecord::Base
  belongs_to :character
  belongs_to :video_game
end
