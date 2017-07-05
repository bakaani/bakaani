class Anime < ApplicationRecord
  STATUSES = %w(na ongoing completed).freeze
  SHOW_TYPES = %w(tv ova ona movie special).freeze

  mount_uploader :cover, CoverUploader

  has_and_belongs_to_many :genres, dependent: :destroy

  validates_presence_of :title
  validates_uniqueness_of :title
  validates_inclusion_of :status, in: STATUSES
  validates_inclusion_of :show_type, in: SHOW_TYPES
end
