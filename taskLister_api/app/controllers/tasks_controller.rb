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
    task = Task.new(task_params)
    if task.save
      list = List.find(task.list_id)
      render json:{list_info: list, tasks:list.tasks}
    end
  end

  private

  def task_params
    params.require(:task).permit(:name,:description,:date,:list_id)
  end

  # def set_task
  #   task = Task.find_by_id(params[:id])
  # end

end
