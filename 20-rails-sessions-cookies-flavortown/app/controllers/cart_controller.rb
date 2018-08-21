class CartController < ApplicationController
  def update
    add_nacho_to_cart(params[:nacho_id])
    flash[:notice] = "Successfully added #{params[:name]} to cart"
    redirect_to nachos_path
  end
end
