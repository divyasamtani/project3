Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
	# For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

	# root
	root 'statics#main'
  #               root GET      /                                      statics#main


	# current user
	scope '/user' do
		resources :lists, only: [:index, :show, :new, :edit], controller: 'user_lists', as: 'user_lists'
	end
  #         user_lists GET      /user/lists(.:format)                  user_lists#index
  #      new_user_list GET      /user/lists/new(.:format)              user_lists#new
  #     edit_user_list GET      /user/lists/:id/edit(.:format)         user_lists#edit
  #          user_list GET      /user/lists/:id(.:format)              user_lists#show

	# other users
	resources :lists, only: [:index, :show]
  #              lists GET      /lists(.:format)                       lists#index
  #               list GET      /lists/:id(.:format)                   lists#show

	# api
	namespace :api do
		scope '/user' do
			resources :lists, controller: 'user_lists', as: 'user_lists'
      #     api_user_lists GET      /api/user/lists(.:format)              api/user_lists#index
      #                    POST     /api/user/lists(.:format)              api/user_lists#create
      #  new_api_user_list GET      /api/user/lists/new(.:format)          api/user_lists#new
      # edit_api_user_list GET      /api/user/lists/:id/edit(.:format)     api/user_lists#edit
      #      api_user_list GET      /api/user/lists/:id(.:format)          api/user_lists#show
      #                    PATCH    /api/user/lists/:id(.:format)          api/user_lists#update
      #                    PUT      /api/user/lists/:id(.:format)          api/user_lists#update
      #                    DELETE   /api/user/lists/:id(.:format)          api/user_lists#destroy
		end

		resources :lists
    #          api_lists GET      /api/lists(.:format)                   api/lists#index
    #                    POST     /api/lists(.:format)                   api/lists#create
    #       new_api_list GET      /api/lists/new(.:format)               api/lists#new
    #      edit_api_list GET      /api/lists/:id/edit(.:format)          api/lists#edit
    #           api_list GET      /api/lists/:id(.:format)               api/lists#show
    #                    PATCH    /api/lists/:id(.:format)               api/lists#update
    #                    PUT      /api/lists/:id(.:format)               api/lists#update
    #                    DELETE   /api/lists/:id(.:format)               api/lists#destroy
	end

end
