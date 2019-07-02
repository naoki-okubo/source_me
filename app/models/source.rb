class Source < ApplicationRecord
  belongs_to :user
  belongs_to :board
  belongs_to :category
end
