class User < ApplicationRecord
  rolify
  devise :database_authenticatable, :registerable, :confirmable,
         :recoverable, :rememberable, :trackable, :validatable

  mount_uploader :avatar, AvatarUploader

  def user?
    has_role?(:user)
  end

  def admin?
    has_role?(:admin)
  end
end
