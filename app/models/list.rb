class List < ApplicationRecord
	belongs_to: :user
	has_many: :users, through: :list_bookmarks
	has_many: :restaurants, through: :restaurant_lists
end
