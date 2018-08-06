ActiveRecord::Schema.define(version: 20_180_806_174_940) do
  create_table 'squirrels', force: :cascade do |t|
    t.string  'name'
    t.integer 'weight'
  end
end
