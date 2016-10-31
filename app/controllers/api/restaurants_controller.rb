class API::RestaurantsController < ApplicationController
	before_action :authenticate_user!
	# skip_before_action :verify_authenticity_token
	before_action :set_restaurant, only: [:create, :update]

	def create
		@restaurant = Restaurant.new(restaurant_params)

		if @restaurant.save
			render json: @restaurant
		else
			render json: @restaurant.errors.messages, status: 422
		end
	end

private
	def set_restaurant
		@restaurant = Restaurant.find_by(id: params[:id])
		@message = "Cannot find find restaurant" if @restaurant.nil?
	end

	def restaurant_params
		params.require(:restaurants).permit(:name)
	end

end