class ListsController < ApplicationController
  # before_action :set_list, only: [:show, :edit, :delete]

  def index
    lists = List.all
    render json: lists
  end

  def show
    list = List.find(params[:id])
    nested_list = {list_info: list, tasks:list.tasks}
    # byebug;
    render json: nested_list
  end

  # def new
  #
  # end

  def create
    new_list = List.new(lists_params)
    if (new_list.save)
      response = {list_info: new_list, tasks:new_list.tasks}
      render json: response
    else
      render json: list.errors
    end

  end

  private

  # def set_list
  #   list = List.find(params[:id])
  # end

  def lists_params
    params.require(:list).permit(:name)

  end


end
