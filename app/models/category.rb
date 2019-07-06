class Category < ApplicationRecord
  belongs_to :user
  belongs_to :board
  has_many :sources, dependent: :destroy

  # ------------validate-----------
  validates :name, presence: true, uniqueness: true, length: { maximum: 20 }
end
