class Restaurant < ApplicationRecord
	has_many: :lists, through: :retaurant_lists
end
