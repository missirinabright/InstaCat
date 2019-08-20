class CommentsController < ApplicationController

  def index
    @comments = Comment.all
    render json: @comments
  end

  def show
    find_comment
  end

  def new
    @comment = Comment.new
  end

  def create
    @comment = Comment.create(comment_params)
    render json: @comments
  end

  def edit
    find_comment
  end

  def update
    find_comment
    @comment.update(comment_params)
    render json: @comment
  end

  def destroy
    find_comment
    @comment.destroy
    render json: @comments
  end

  private

  def comment_params
    params.require(:comment).permit(:name, :breed)
  end

  def find_comment
    @comment = Comment.find(params[:id])
  end


end
