class User < ActiveRecord::Base
	has_many: :lists, through: :list_bookmarks
	has_many: :lists

  # Include default devise modules.
  devise :database_authenticatable, :registerable,
          :recoverable, :rememberable, :trackable, :validatable,
          :omniauthable
  include DeviseTokenAuth::Concerns::User
end
