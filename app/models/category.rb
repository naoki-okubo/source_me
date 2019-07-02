class Category < ApplicationRecord
  belongs_to :user
  belongs_to :board
  has_many :sources, dependent: :destroy
end
