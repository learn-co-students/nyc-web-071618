class CreateCows < ActiveRecord::Migration[5.2]
  def change
    create_table :cows do |t|
      t.string :name
      t.integer :weight
      t.integer :num_spots
      t.boolean :tipped
      t.boolean :chocolate_milk
      t.references :farmer

      t.timestamps
    end
  end
end
