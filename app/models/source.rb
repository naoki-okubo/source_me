class Source < ApplicationRecord
  belongs_to :user, dependent: :destroy
  belongs_to :board, dependent: :destroy
  has_many :tags, through: :sources_tags
end
