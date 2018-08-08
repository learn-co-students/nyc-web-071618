class CreateCharacterVideoGames < ActiveRecord::Migration
  def change
    create_table :character_video_games do |t|
      t.integer :character_id
      t.integer :video_game_id
    end
  end
end
