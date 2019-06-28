class Board < ApplicationRecord
  belongs_to :user, dependent: :destroy
  has_many :sources, dependent: :destroy
end
