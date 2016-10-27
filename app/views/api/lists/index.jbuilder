json.array! @lists do |list|
  json.merge! list.attributes
  # this gives me :title, :description, :user_id
  json.user_email   list.user.email
end