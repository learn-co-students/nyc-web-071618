Rails.application.routes.draw do
  resources :nachos, only: [:index, :show]
end
