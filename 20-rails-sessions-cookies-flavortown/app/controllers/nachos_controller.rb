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
