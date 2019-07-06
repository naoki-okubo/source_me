class CategoriesController < ApplicationController
  
  def index
  end

  def new
    @category = Category.new
    @board_id = params[:format]
  end

  def create
    @params_category = params[:category]
    @category = Category.create(category_params)
    redirect_to source_path(@params_category[:board_id])
  end

  def show
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

  def category_params
    params.require(:category).permit(:name, :board_id).merge(user_id: current_user.id)
  end
end
