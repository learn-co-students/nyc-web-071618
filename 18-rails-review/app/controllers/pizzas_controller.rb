class PizzasController < ApplicationController

  def index # GET /pizzas
    @pizzas = Pizza.all
    render :index
  end

  def show # GET /pizzas/:id
    @pizza = Pizza.find(params[:id])
    render :show
  end

  def new # GET /pizzas/new
    @pizza = Pizza.new # pass empty pizza instance to form_for
    render :new
  end

  def create # POST /pizzas -> new form will post here
    @pizza = Pizza.create(pizza_params)
    if @pizza.valid?
      # flash will sends a piece of data via sessions/cookies that expires after one HTTP request
      flash[:notice] = 'Successfully created pizza!'
      redirect_to pizza_path(@pizza) # /pizzas/1
    else
      # if the pizza fails to save render the same form and pass the same @pizza instance variable down to it
      render :new
    end
  end

  def edit # GET /pizzas/:id/edit
    render :new
  end

  def update # PATCH /pizzas/:id
    #code
  end

  private
  def pizza_params
    params.require(:pizza).permit(:toppings, :tasty, :price, :size)
  end

end
