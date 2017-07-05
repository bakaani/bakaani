class Genre < ApplicationRecord
  has_and_belongs_to_many :animes, dependent: :destroy
end
