class PostSerializer < ActiveModel::Serializer
  attributes :id, :title, :img_url, :user_id

end
