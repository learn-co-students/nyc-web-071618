class FarmersController < ApplicationController
  def edit # GET /farmers/:id/edit
    @farmer = Farmer.find(params[:id])
    render :edit
    #code
  end

  def update
    #code
  end
end
