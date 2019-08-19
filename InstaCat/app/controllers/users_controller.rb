class UsersController < ApplicationController

  def index
    @users = User.all
    render json: @users
  end

  def show
    find_user
  end

  def new
    @user = User.new
  end

  def create
    @user = User.create(user_params)
    render json: @users
  end

  def edit
    find_user
  end

  def update
    find_user
    @user.update(user_params)
    render json: @user
  end

  def destroy
    find_user
    @user.destroy
    render json: @users
  end

  private

  def user_params
    params.require(:user).permit(:name, :breed)
  end

  def find_user
    @user = User.find(params[:id])
  end

end
