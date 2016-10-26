class UserListsController < ApplicationController
  def index
    currentUser = $.auth.user.id
    put currentUser
    @user = List.where(user_id: currentUser)
  end

  def show
  end

  def new
  end

  def edit
  end
end