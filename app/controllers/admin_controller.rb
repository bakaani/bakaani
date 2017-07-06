class AdminController < ActionController::Base
  protect_from_forgery with: :exception

  layout 'admin'

  before_action :authenticate_admin!

  protected

  def authenticate_admin!
    if user_signed_in? && !current_user.admin?
      redirect_to root_url, alert: t('admin.access_denied')
    elsif !user_signed_in?
      authenticate_user!
    end
  end
end
