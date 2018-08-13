Rails.application.routes.draw do
  resources :turkeys
  # get '/turkeys', to: 'turkeys#index', as: 'turkeys'
end
