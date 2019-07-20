class SourcesController < ApplicationController
  protect_from_forgery except: :create
  before_action :set_user

  def index
  end

  def new
    @source  = Source.new
    @board_id = params[:format]
    @board = @user.categories.where(board_id: "#{@board_id}")
  end

  def create
    @params_source = params[:source]
    @source  = Source.new(source_parems)
    @board_id = @params_source[:board_id]
    if @source.save
      redirect_to source_path(@board_id)
    else
    end
  end

  def show
    @board_id = @user.boards.find(params[:id])
    @category = @user.categories.where(board_id: "#{params[:id]}")
    gon.sources = Source.all
    gon.categories = Category.all
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
