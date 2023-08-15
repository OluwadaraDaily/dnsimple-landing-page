Rails.application.routes.draw do
  root "public#index"
  get "/account", to: "public#account"
end
