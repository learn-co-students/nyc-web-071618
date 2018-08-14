class PizzasController < ApplicationController
  before_action(:find_pizza, { only: [:show, :edit, :update, :destroy] })

  def index # GET /pizzas
    @pizzas = Pizza.all
    render :index
  end

  def show # GET /pizzas/:id
    # @pizza = Pizza.find(params[:id])
    render :show
  end

  def new # GET /pizzas/new
    @pizza = Pizza.new # pass empty pizza instance to form_for
    render :new
  end

  def create # POST /pizzas -> new form will post here
    @pizza = Pizza.create(pizza_params) #-> invokes pizza_params when I reference it
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
    # @pizza = Pizza.find(params[:id]) #=> find the pizza the user wants to edit based on id found in route params -> /pizzas/4/edit
    render :edit
  end

  def update # PATCH /pizzas/:id
    if @pizza.update(pizza_params)
      flash[:notice] = 'Successfully updated pizza'
      # redirect_to pizza_path(@pizza)
      redirect_to(@pizza)
    else
      render :edit
    end
    # @pizza = Pizza.find(params[:id]) #=> find the pizza the user wants to edit based on id found in route params -> /pizzas/4
    #code
  end

  def destroy
    @pizza.destroy
    flash[:notice] = 'Successfully deleted pizza'
    redirect_to pizzas_path
  end

  private
  def pizza_params
    # {authenticity_token: 'askdjf;laksdjflksdjlkjf', pizza: {toppings: 'pepperoni', tasty: true}}
    params.require(:pizza).permit(:toppings, :tasty, :price, :size)
  end

  def find_pizza
    @pizza = Pizza.find(params[:id])
  end

end
