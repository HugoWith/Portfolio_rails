Rails.application.routes.draw do
  get 'pages/home'
  get 'home/index'
  post 'home/index'
  root to: 'pages#home'
  resources :pages, only: [:home, :new, :create]
end
