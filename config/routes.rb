Rails.application.routes.draw do
  root 'urges#index'  

  get 'urges/quick_create' => 'urges#quick_create'
  post 'urges/quick_create' => 'urges#quick_create'
  resources :urges

  resources :urge_fors
  

  get 'pages/home'
  get 'pages/history'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
