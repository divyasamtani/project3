class UserListsController < ApplicationController
  def index
    @lists = List.all
    # currentUser = $.auth.user.id
    # @user = List.where(user_id: currentUser)
  end

  def show
  end

  def new
  end

  def edit
  end
end