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

  def new

  end

  def create

  end

  private

  # def set_list
  #   list = List.find(params[:id])
  # end
end
