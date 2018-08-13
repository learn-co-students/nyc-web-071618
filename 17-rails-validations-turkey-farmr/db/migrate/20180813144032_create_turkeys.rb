class CreateTurkeys < ActiveRecord::Migration[5.2]
  def change
    create_table :turkeys do |t|
      t.string :name
      t.boolean :alive
      t.integer :weight
      t.string :giblets

      t.timestamps
    end
  end
end
