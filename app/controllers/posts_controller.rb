class PostsController < ApplicationController
  def index
    @posts = Post.all
    respond_to do |format|
      format.html { render :index }
      format.json { render :json => @posts }
    end
  end

  def new
    @post = Post.new()
    respond_to do |format|
      format.html { render :index }
      format.json { render :json => @post }
    end
  end

  def create
    @post = Post.new(params[:post])
    @post.save

    redirect_to posts_url
  end

  def show
    @post = Post.find(params[:id])
    respond_to do |format|
      format.html { render :index }
      format.json { render :json => @post }
    end
  end

  def update
    @post = Post.find(params[:id])
    if @post.update_attributes(params[:post])
      head :ok
    else
      format.json {render :json => @post}
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy

    head :ok

  end
end
