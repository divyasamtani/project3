class UserListsController < ApplicationController
  def index
    currentUser = $.auth.user.id
    @user = List.where(user_id: currentUser)
end