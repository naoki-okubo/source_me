class User < ApplicationRecord
  has_many :boards, dependent: :destroy
  has_many :sources, dependent: :destroy
end
