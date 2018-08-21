Rails.application.routes.draw do
  root to: 'nachos#index'
  resources :nachos, only: [:index, :show]
end
