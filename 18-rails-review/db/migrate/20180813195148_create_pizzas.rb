class CreatePizzas < ActiveRecord::Migration[5.2]
  def change
    create_table :pizzas do |t|
      t.string :toppings
      t.boolean :tasty
      t.string :size
      t.integer :price

      t.timestamps
    end
  end
end
