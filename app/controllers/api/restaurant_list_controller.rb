class API::RestaurantListController < ApplicationController
  before_action :authenticate_user!
  before_action :set_restaurantlist, only: [:create, :update]

  def create
    @restaurantlist = current_user.lists.new(userlist_params)

    if @userlist.save
      render json: @userlist
    else
      render json: @userlist.errors.messages, status: 422
    end
  end

private

  def set_restaurantlist
    @restaurantlist = current_user.lists.find_by(id: params[:id])
    if @list.nil?
      render json: {message: "Cannot find '#{params[:id]}'"}
    end
  end

  def userlist_params
    params.require(:restaurant_list).permit(:list_id, :restaurant_id, :checked)
  end

end
