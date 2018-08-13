class TurkeysController < ApplicationController

  def index
    @turkeys = Turkey.all
    # render :index
  end

  def new
    @turkey = Turkey.new
    render :new
  end

  def create
    # @turkey = Turkey.new(turkey_params) #=> this will call the turkey_params method which returns a hash
    @turkey = Turkey.create(turkey_params) #=> this will call the turkey_params method which returns a hash
    # any time i attempt to commit a turkey to my db-> creating, editing, the validations will be run FIRST
    if @turkey.valid?
      flash[:notice] = 'Successfully created a new turkey!'
      redirect_to(turkeys_path)
    else
      # redirect_to new_turkey_path #=> redirect fires a new GET request. New method will create a new blank turkey and our users will lose whatever they typed into the form
      render :new
    end
  end

  private
  def turkey_params
    params.require(:turkey).permit(:name, :weight, :alive, :giblets) #=> return hash of whitelisted attributes for our turkey
  end

end
