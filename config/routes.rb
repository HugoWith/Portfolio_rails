Rails.application.routes.draw do
  get 'pages/home'
  get 'home/index'
  root to: 'pages#home'
  resources :home, only: [:home, :new, :create]
end
