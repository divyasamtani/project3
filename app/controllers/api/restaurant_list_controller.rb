class API::RestaurantListController < ApplicationController
  before_action :authenticate_user!
  before_action :set_restaurantlists, only: [:index]
  before_action :set_restaurantlist, only: [:show, :create, :update]

  def index
    render json: @restaurantlists
  end

  def show
    render json: @restaurantlist
  end

  def create
    @restaurantlist = RestaurantList.new(restaurantlist_params)

    if @restaurantlist.save
      render json: @restaurantlist
    else
      render json: @restaurantlist.errors.messages, status: 422
    end
  end

  def update
    @restaurantlist.assign_attributes(restaurantlist_params)
    if @restaurantlist.save
      render json: @restaurantlist
    else
      render json: @restaurantlist.errors.messages, status: 400
    end
  end

private

  def set_restaurantlists
    @restaurantlists = RestaurantList.all
  end

  def set_restaurantlist
    @restaurantlist = RestaurantList.find_by(id: params[:id])
    @message = "Cannot find restaurant list with ID #{params[:id]}" if @restaurantlist.nil?
  end

  def restaurantlist_params
    params.require(:restaurant_list).permit(:list_id, :restaurant_id, :checked)
  end

end
