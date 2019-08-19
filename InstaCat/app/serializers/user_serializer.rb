class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :breed
  has_many :comments

end
