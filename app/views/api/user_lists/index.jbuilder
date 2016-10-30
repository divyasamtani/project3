# CURRENT USER LISTS

json.array! @lists do |list|
  json.merge! list.attributes
  json.list_restaurants list.restaurants.select(:name).pluck(:name)
  json.user_bookmarks list.user.bookmarks
  json.restaurant_checked list.restaurant_lists.select(:checked).pluck(:checked)
end

#  if !list.restaurants.blank?
#     json.list_restaurants list.restaurants.select(:name).pluck(:name)
#   end
# #