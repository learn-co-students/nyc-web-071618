Rails.application.routes.draw do
  # gives me ALL restful routes
  resources :pizzas

  # will ONLY give me a route for index: get '/pizzas', to: 'pizzas#index', as: 'pizzas'
  # resources :pizzas, only: [:index]

  # get '/pizzas/:id', to: 'pizzas#show', as: 'pizza'
  # get '/andrew', to: 'pizzas#andrew', as: 'andrew'
  # as: 'andrew' creates a helper method that I can call like so: andrew_path

  # SINATRA
  # def /pizzas/:id
    #logic for show method
  # end
end
