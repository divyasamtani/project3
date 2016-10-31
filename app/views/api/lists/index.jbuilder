json.array! @lists do |list|
  json.merge! list.attributes
  json.user_email list.user.email
  json.user_name list.user.name
  json.list_restaurants list.restaurants.select(:name).pluck(:name)
end
