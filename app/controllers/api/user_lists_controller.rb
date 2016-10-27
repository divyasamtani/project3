# module: API
class API::UserListsController < ApplicationController
  before_action :set_userlists
  before_action :set_userlist


# CRUD
# 1
  def index
    render json: @userlists
  end

# 2
  def show
    render json: @userlist
  end


# 3
  def new
    @userlist = List.new(userlist_params)

    if @userlist.save
      render 'new'
    else
      render json: userlist.errors.messages, status: 422
    end
  end

# 4
  def update
    @userlist.assign_attributes(userlist_params)

    if @userlist.save
      render 'show'
    else
      render json: userlist.errors.messages, status: 422
    end
  end

# 5
  def destroy
    @userlist.destroy
    head 204
  end



# PRIVATE METHODS
  private
    def set_userlists
      currentUser = $.auth.user.id
      @userlists = List.where(user_id: currentUser)
    end

    def set_userlist
      @userlist = List.find_by(user_id: currentUser)
    end

    def userlist_params
      params.require(:list).permit(:title, :description)
    end
  end
end
