class CowsController < ApplicationController
  def new
    @cow = Cow.new
    render :new
  end

  def show # GET /cows/:id
    @cow = Cow.find(params[:id])
    render :show
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
    params.require(:cow).permit(:name, :farmer_id, :spots, :tipped, :chocolate_milk, :weight)
  end

end
