class ListBookmark < ApplicationRecord
	belongs_to :user, :list
end
