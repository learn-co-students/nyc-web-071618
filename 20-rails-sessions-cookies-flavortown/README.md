# Sessions and Cookies in R A I L S

![](https://camo.githubusercontent.com/e03d1410921dec48c918ea66245f90b9dd50488e/68747470733a2f2f6d656469612e67697068792e636f6d2f6d656469612f484765347a734f566f374a76792f67697068792e676966)

# What are Sessions?

### From the [Rails Docs](https://guides.rubyonrails.org/security.html#sessions):

- HTTP is a stateless protocol. Sessions make it stateful.

```
Most applications need to keep track of certain state of a particular user. This
could be the contents of a shopping basket or the user id of the currently
logged in user. Without the idea of sessions, the user would have to identify,
and probably authenticate, on every request. Rails will create a new session
automatically if a new user accesses the application. It will load an existing
session if the user has already used the application.

A session usually consists of a hash of values and a session ID, usually a
32-character string, to identify the hash. Every cookie sent to the client's
browser includes the session ID. And the other way round: the browser will send
it to the server on every request from the client. In Rails you can save and
retrieve values using the session method:
```

- We will see a more thorough example of this during the two part Auth lecture but here is an example of a session in action:

```ruby
# in application controller
session[:user_id] = @current_user.id
User.find(session[:user_id])
```

Basically, sessions allow us to store information that we may need across different HTTP requests. The session_id is sent along *with every single HTTP request our app makes.*

---
We will be building out an e-commerce site where users can add nachos to their carts:

`rails g resource Nacho name description price:integer`

---
## Nachos Controller

```ruby
# app/controllers/nachos_controller.rb
class NachosController < ApplicationController
  before_action :find_nacho, only: :show #only when show is called, find the nacho before proceeding

  def index
    @nachos = Nacho.all
    render :index
  end

  def show
    # before action find_nacho is called BEFORE anything happens in this method
    render :show
  end

  private
  def find_nacho
    # this helper method will be used whenever accessing a url with a nacho id sent:
    # /nachos/1
    # /nachos/:id/edit
    @nacho = Nacho.find(params[:id])
  end
end
```

```html
<!-- app/views/nachos/index.html.erb -->
<h1>Menu</h1>

<h3><%= flash[:notice] %></h3>


<% @nachos.map do |nacho| %>
  <ul>
    <li>
      <%= link_to nacho.name, nacho %>
      $<%= nacho.price %>
      <%=
        button_to "Add To Cart"
        # TODO: make this button work lol
      %>
    </li>
  </ul>
<% end %>
```

```html
<!-- app/views/nachos/show.html.erb -->
<h1>Details for <%= @nacho.name %></h1>

<p>Name: <%= @nacho.name %></p>

<p>Price: $<%= @nacho.price %></p>

<p>Description: <%= @nacho.description %></p>

<%= link_to 'All Nachos', nachos_path %>

```

---
I have a button that *should* allow my users to add a nacho to their cart. Therefore, I need a route that can handle this request:

## Routes

```ruby
Rails.application.routes.draw do
  resources :nachos, only: [:index, :show]
  patch '/cart', to: 'cart#update', as: 'add_to_cart'
end
```
---
I now need to handle this patch request. HTTP requests are handled by controllers. I therefore need a *cart_controller*. Since my cart is not being stored in my database, I do not need a model or a view for this, just a controller to handle HTTP request related to my cart:

## Cart Controller

I also need to update my `button_to` so that it sends a patch request to my new URL:

```html
<!-- app/views/nachos/index.html.erb -->
<h1>Menu</h1>

<h3><%= flash[:notice] %></h3>


<% @nachos.map do |nacho| %>
  <ul>
    <li>
      <%= link_to nacho.name, nacho %>
      $<%= nacho.price %>
      <%=
       button_to "Add To Cart",
       add_to_cart_path,
       method: :patch,
       params: { nacho_id: nacho.id, name: nacho.name }
     %>
    </li>
  </ul>
<% end %>
```


```ruby
class CartController < ApplicationController
  def update
    # using the session method I can add a single nacho to my cart
    session[:nacho_id] = params[:nacho_id]
  end
end
```

This _works_ but isn't great. Since other controllers like my `NachosController` need to know about the data stored in the cart, I need to lift my cart logic up to the `ApplicationController`. Recall that *all controllers inherit from the ApplicationController* and therefore have access to methods

---

### Application Controller

Since our cart is relevant to our application as a whole, we interact with it in the application controller instead of one of our child controllers

```ruby
class ApplicationController < ActionController::Base
  # helper_method :add_nacho_to_cart => will make this method accessible in views; i can still call it in my controllers since they all inherit from ApplicationController

  def cart # returns the cart array stored in session
    # returns my current cart by reading from session hash
    session[:cart] ||= []
    # if session[:cart]
    #   session[:cart]
    # else
    #   session[:cart] = []
    # end
  end

  def add_nacho_to_cart(nacho_id) # adds a nacho_id to the cart stored in session
    # call cart method defined above to write to the cart
    cart << nacho_id
  end

  def get_items_from_cart # take the nacho_ids in the cart and return ruby instances by talking to the model (Nacho.find)
    @cart_items = Nacho.find(cart)
  end
end
```

---

Now I can display the information in my cart to my users:

Finalized `NachosController`

```ruby
class NachosController < ApplicationController
  before_action :find_nacho, only: :show
  before_action :get_items_from_cart, only: :index #get items from cart comes from ApplicationController

  def index
    @nachos = Nacho.all
  end

  def show
    render :show
  end

  private

  def find_nacho
    @nacho = Nacho.find(params[:id])
  end
end
```

```ruby
class CartController < ApplicationController
  def update
    add_nacho_to_cart(params[:nacho_id])
    flash[:notice] = "Successfully added #{params[:name]} to cart"
    redirect_to nachos_path
  end
end
```

And the corresponding view:

```html
<!-- app/views/nachos/index.html.erb -->
<h1>Menu</h1>

<h3><%= flash[:notice] %></h3>

<h4>Your Cart: </h4>
<ol>
  <% @cart_items.each do |cart_item| %>
    <li><%= cart_item.name %></li>
  <% end %>
</ol>

<hr>

<% @nachos.map do |nacho| %>
  <ul>
    <li>
      <%= link_to nacho.name, nacho %>
      $<%= nacho.price %>
      <%=
        button_to "Add To Cart",
        add_to_cart_path,
        method: :patch,
        params: { nacho_id: nacho.id, name: nacho.name }
      %>
    </li>
  </ul>
<% end %>
```

![](https://media.giphy.com/media/Vxk8eYR1fV0Qw/giphy.gif)

---

## External Resources:

- [Rails Docs on Sessions](https://guides.rubyonrails.org/security.html#sessions)
- [Wiki Page on HTTP Headers](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields)
- [Guy Fieri Restaurant](http://www.guyfieri.com/eat-at-guys)
