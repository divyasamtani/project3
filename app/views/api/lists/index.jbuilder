json.array! @lists do |list|
  json.merge! list.attributes
  json.user_email list.user.email
  json.user_name list.user.name
  json.list_restaurants list.restaurants.select(:name).pluck(:name)
end


  # json.restaurant do |json|
  #   json.(@list.restaurant, :id, :name)
  #   json.restaurant_name list_restaurant(@list.restaurant)
  # end



  # json.list_restaurants list.restaurants, :id, :name





# user_email = var to grab user email address attached to the list
