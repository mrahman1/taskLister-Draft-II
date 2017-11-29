class TasksController < ApplicationController
  # before_action :set_task, only: [:show, :edit, :delete]

  def index
    tasks = Task.all
    render json: tasks
  end

  def show
    task = Task.find(params[:id])
    render json: task
  end

  def new

  end

  def create

  end

  private

  # def set_task
  #   task = Task.find_by_id(params[:id])
  # end

end
