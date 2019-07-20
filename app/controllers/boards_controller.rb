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
    end

  end

  def show
    @board = @user.boards.all.order(id: 'DESC')
    gon.user = @user
    gon.authenticity_token = form_authenticity_token
    
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
