class UserListsController < ApplicationController

  def index
    render json: List.all
  end

end
