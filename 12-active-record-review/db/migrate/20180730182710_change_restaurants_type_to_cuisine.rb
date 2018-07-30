class ChangeRestaurantsTypeToCuisine < ActiveRecord::Migration[5.2]
  def change
    rename_column :restaurants, :type, :cuisine
  end
end
