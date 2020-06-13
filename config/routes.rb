Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root 'tanaka#toppage'
  get 'contact', to: 'tanaka#contact'
  get 'profile', to: 'tanaka#profile'

  mount LetterOpenerWeb::Engine, at: "/letter_opener" if Rails.env.development?
end
