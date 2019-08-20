class Post < ApplicationRecord
  belongs_to :user
  has_many :comments
  # has_one :user, through: :comment
end
