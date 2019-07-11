class CategoriesController < ApplicationController
  protect_from_forgery except: :create
  
  def index
  end

  def new
    @category = Category.new
    @board_id = params[:format]
    @source_path = source_path(@board_id)
  end

  def create
    @params_category = params[:category]
    
    @category = Category.new(category_params)
    @board_id = @params_category[:board_id]
    if @category.save
      redirect_to source_path(@board_id)
    else
      flash[:notice] = "error"
      redirect_to new_category_path(@board_id)
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

  private

  def category_params
    params.require(:category).permit(:name, :board_id).merge(user_id: current_user.id)
  end
end
