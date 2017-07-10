Rails.application.routes.draw do
  root 'home#index'

  devise_for :users, path: '', path_names: {
    sign_up: '',
    sign_in: 'login',
    sign_out: 'logout',
    registration: 'register'
  }

  devise_scope :user do
    get 'account/profile' => 'devise/registrations#edit'
  end

  namespace :admin do
    root 'dashboard#index'
    resources :animes
    resources :genres, except: [:new, :edit, :show]
  end
end
