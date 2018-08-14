Rails.application.routes.draw do
  resources :cows, only: [:new, :create, :show]
  resources :farmers, only: [:edit, :update]
end
