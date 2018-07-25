class Addpassengeridtoride < ActiveRecord::Migration[5.2]
  def change
    add_column :rides, :passenger_id, :integer
  end
end
