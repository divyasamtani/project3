Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
	resources :user do
		resources :lists, only: [:index, :show, :new, :edit]
	end

	# root 'statics#main'
	root 'lists#index'

	namespace :api do
		namespace :user do
			resources :lists
		end

		resources :users, only: [:index] do
			resources :lists
		end
	end

end
