class Restaurant < ApplicationRecord
	has_many :restaurant_lists
	has_many :lists, through: :restaurant_lists
end
