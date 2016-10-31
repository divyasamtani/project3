json.array! @bookmarks do |bookmark|
  json.merge! bookmark.attributes
  json.bookmark_title bookmark.title
  json.bookmark_description bookmark.description
  json.bookmark_restaurants bookmark.restaurants.select(:name).pluck(:name)
end