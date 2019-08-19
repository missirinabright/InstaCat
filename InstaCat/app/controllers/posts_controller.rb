class PostsController < ApplicationController

  def index
    @posts = Post.all
    render json: @posts
  end

  def show
    find_post
    render json: @post
  end

  def new
    @post = Post.new
  end

  def create
    @post = Post.create(post_params)
    render json: @posts
  end

  def edit
    find_post
  end

  def update
    find_post
    @post.update(post_params)
    render json: @post
  end

  def destroy
    find_post
    @post.destroy
    render json: @posts
  end

  private

  def post_params
    params.require(:post).permit(:title, :img_url)
  end

  def find_post
    @post = Post.find(params[:id])
  end

end
