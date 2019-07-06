class BoardsController < ApplicationController
  before_action :set_user,except: :index

  def index
    redirect_to board_path(current_user.id) if user_signed_in?
  end

  def new
    @board = Board.new
  end

  def create
    @board = Board.new(board_params)
    if @board.save
      redirect_to board_path(@user.id)
    else
      flash[:notice] = "error"
      redirect_to new_board_path
    end

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

  private

  def board_params
    params.require(:board).permit(:name).merge(user_id: current_user.id)
  end
end
