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
