class SourcesController < ApplicationController
  before_action :set_user

  def index
  end

  def new
  end

  def create
  end

  def show
    @board = User.find(current_user.id).categories.where(board_id: "#{params[:id]}")
  end

  def edit
  end

  def update
  end

  def destroy
  end

  def set_user
    @user = User.find(current_user.id)
  end
end
