class SourcesController < ApplicationController
  before_action :set_user

  def index
  end

  def new
    @source  = Source.new
    @board_id = params[:format]
    @board = User.find(current_user.id).categories.where(board_id: "#{@board_id}")
  end

  def create
    @params_source = params[:source]
    @source  = Source.create(source_parems)
    redirect_to source_path(@params_source[:board_id])
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

  private

  def source_parems
    params.require(:source).permit(:url, :title, :text, :board_id, :category_id).merge(user_id: current_user.id)
  end
end
