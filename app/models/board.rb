class Board < ApplicationRecord
  belongs_to :user
  has_many :sources, dependent: :destroy
  has_many :categories, dependent: :destroy

  # ------------validate-----------
  validates :name, presence: true, length: { maximum: 20 }
end
