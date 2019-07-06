class Source < ApplicationRecord
  belongs_to :user
  belongs_to :board
  belongs_to :category

  # ------------validate-----------
  validates :url, presence: true, length: { maximum: 2083 }
  validates :title, presence: true, length: { maximum: 100 }
  validates :text, length: { maximum: 1000 }
end
