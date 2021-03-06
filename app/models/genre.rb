class Genre < ApplicationRecord
  has_and_belongs_to_many :animes, dependent: :destroy

  validates_presence_of :name
  validates_uniqueness_of :name
end
