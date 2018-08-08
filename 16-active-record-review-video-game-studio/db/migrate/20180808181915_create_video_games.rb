class CreateVideoGames < ActiveRecord::Migration
  def change
    create_table :video_games do |t|
      t.string :title
      # each instance (record) needs to know the ID of the studio to which it belongs
      t.integer :studio_id
    end
  end
end
