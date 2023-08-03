class PublicController < ApplicationController
  def index
  end

  def account
    @email = params[:email]
  end
end
