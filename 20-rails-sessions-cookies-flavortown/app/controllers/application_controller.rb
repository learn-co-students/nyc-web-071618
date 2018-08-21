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
