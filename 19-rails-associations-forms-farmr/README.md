# Associations in Rails

## Building a has_many and belongs_to

For our app, we're creating cows and farmers. A farmer `has_many` cows, and a cow `belongs_to` a farmer

- `rails new farmr`

- `rails g resource Farmer name`––this will create a Farmer model, FarmersController, and create a migration for farmers. Remember that we do not need to say `name:string`. The rails generator will default to use a string:

```ruby
class CreateFarmers < ActiveRecord::Migration[5.2]
  def change
    create_table :farmers do |t|
      t.string :name

      t.timestamps
    end
  end
end
```

- We need to tell our Farmer that is `has_many` cows:

```ruby
class Farmer < ApplicationRecord
  has_many :cows
end
```

- Let's generate a Cow and tell it that it `belongs_to` a farmer: `rails g resource Cow name farmer:references`

  - the `farmer:references` generator does a few things for us:

    - adds the `belongs_to` to our Cow model:

    ```ruby
    class Cow < ApplicationRecord
      belongs_to :farmer
    end
    ```

    - adds a reference––foreign_key––to our cows table:

    ```ruby
    class CreateCows < ActiveRecord::Migration[5.2]
      def change
        create_table :cows do |t|
          t.string :name
          t.references :farmer, foreign_key: true

          t.timestamps
        end
      end
    end
    ```

---

# Testing our Associations

- `rails db:migrate && rails console`

- From the console we can try to create a new cow:

```ruby
  brad = Cow.new(name: 'brad')

brad.save
   (0.1ms)  begin transaction
  Cow Exists (0.5ms)  SELECT  1 AS one FROM "cows" WHERE "cows"."name" = ? LIMIT ?  [["name", "brad"], ["LIMIT", 1]]
   (0.1ms)  rollback transaction
 => false
```

`rollback transaction`

- Because our cow, brad, `belongs_to` a farmer rails will validate the presence of the `farmer_id` on the cow. In other words, a cow is _dependent upon_ a farmer to exist.

```ruby
angus = Farmer.create(name: 'angus')
esther = Cow.create(name: 'esther', farmer: angus)
```

# SUCCESS

![](https://media.giphy.com/media/XreQmk7ETCak0/giphy.gif)

---

# Creating a New Cow with our Form

### Seeding our DB

```ruby
# db/seeds.rb
Farmer.create([{name: 'billybob'}, {name: 'jimmy carter'}, {name: 'angelina jolie'}, {name: 'marc the zucc'}])
```

### Creating the Controller and Form:

#### Controller Methods

#### New Cow Form

```html
<h1>Create a Cow</h1>

<%= form_for @cow do |f| %>
  <%= f.label :name %>
  <%= f.text_field :name %>
  <br>
  <%= f.collection_select :farmer_id, Farmer.all, :id, :name %>
  <br>
  <%= f.submit %>
<% end %>
```

---

#### A Quick Note on Collection Select:

[Collection select](https://apidock.com/rails/ActionView/Helpers/FormOptionsHelper/collection_select) is looking for the following in order:

1.  the method we want to call on `@cow:` farmer_id
2.  the collection we want to use to populate our dropdown with: Farmer.all
3.  the value method; what will show up in our params and as a value in our `<option>` tags: `farmer_instance.id`
4.  the text method; what will show up inside the option tag, what will the user see? `farmer_instance.name`

---

#### Create our Cows Controller

```ruby
# app/controllers/cows_controller.rb
class CowsController < ApplicationController

  def new
    @cow = Cow.new
  end

  def create
    @cow = Cow.new(cow_params)
    if @cow.save
      redirect_to @cow
    else
      render :new
    end
  end

  private
  def cow_params
    params.require(:cow).permit(:name, :farmer_id)
  end

end
```

---

#### Quick Note about Render vs Redirect:

- redirect is a **GET request**, that calls the cows#new method. This method resets the `@cow` instance var
- `redirect_to new_cow_path`
- this will render our `:new` form without a page reload. This allows us to keep the state of our form; `@cow` does not change

---

#### Adding Some Validations:

```ruby
# app/models/cow.rb
class Cow < ApplicationRecord
  validates(:name, {uniqueness: true})

  belongs_to :farmer
  # by default belongs_to will validate the presence and validity of the farmer that the cow belongs to
end
```

#### Displaying errors to our user:

```html
<!-- app/views/cows/new.html.erb -->
<ul>
<% if @cow.errors.any? %>
    <% @cow.errors.full_messages.each do |msg| %>
    <li><%= msg %></li>
  <% end %>
<% end %>
</ul>
```

---

![](https://media.giphy.com/media/A5pcWMMIEO95S/giphy.gif)


### External Resources:
- [Indexing in SQL](https://stackoverflow.com/questions/2955459/what-is-an-index-in-sql)
