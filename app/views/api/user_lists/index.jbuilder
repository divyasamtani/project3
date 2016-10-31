# CURRENT USER LISTS

json.array! @userlists do |userlist|
  json.merge! userlist.attributes
  json.list_restaurants userlist.restaurants.select(:name).pluck(:name)
end
