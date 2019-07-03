class BoardsController < ApplicationController
  before_action :set_user,except: :index

  def index
    redirect_to board_path(current_user.id) if user_signed_in?
  end

  def new
  end

  def create
  end

  def show
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
