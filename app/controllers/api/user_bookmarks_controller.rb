# controls current_user's bookmarks

class API::UserBookmarksController < ApplicationController
  before_action :authenticate_user!
  before_action :set_bookmarks
  before_action :set_bookmark

  def index
    render json: @bookmarks
  end

  def create
    @bookmark = current_user.bookmarks.new(bookmark_params)

    if @bookmark.save
      render json: @bookmark
    else
      render json: @bookmark.errors.messages, status: 422
    end
  end


# PRIVATE METHODS
  private

    def set_bookmarks
      @bookmarks = current_user.bookmarks
    end

    def set_bookmark
      @bookmark = current_user.bookmarks.find_by(id: params[:id])
      if @bookmark.nil?
        render json: {message: "Cannot find '#{params[:id]}'"}
      end
    end

    def bookmark_params
      params.require(:ListBookmark).permit(:user_id, :list_id)
  end
end


