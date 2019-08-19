require 'faker'

Post.destroy_all
User.destroy_all
Comment.destroy_all

15.times do
  User.create(name: Faker::Creature::Cat.name, breed: Faker::Creature::Cat.breed)
end

Post.create(title: "Boss", img_url: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80")
Post.create(title: "Friend", img_url: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80")
Post.create(title: "Doctor", img_url: "https://images.unsplash.com/photo-1548681528-6a5c45b66b42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
Post.create(title: "Engineer", img_url: "https://images.unsplash.com/photo-1507984211203-76701d7bb120?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
Post.create(title: "Lawyer", img_url: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
Post.create(title: "Neighbor", img_url: "https://images.unsplash.com/photo-1506891536236-3e07892564b7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
Post.create(title: "Colleague", img_url: "https://images.unsplash.com/photo-1533738699159-d0c68059bb61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
Post.create(title: "Professor", img_url: "https://images.unsplash.com/photo-1521078927261-4ca4420ad36a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
Post.create(title: "Aunt", img_url: "https://images.unsplash.com/photo-1531040630173-7cfb894c8eaa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
Post.create(title: "Cat", img_url: "https://images.unsplash.com/photo-1559750337-388d6cf815af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
Post.create(title: "Kitty", img_url: "https://images.unsplash.com/photo-1533732457507-d69cb6f05de0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
Post.create(title: "Model", img_url: "https://images.unsplash.com/photo-1561121577-63292b5b9106?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
Post.create(title: "Star", img_url: "https://images.unsplash.com/photo-1488793207478-ff0892419e30?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
Post.create(title: "Celebrity", img_url: "https://images.unsplash.com/photo-1564511027448-69dc3d9ebbc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")
Post.create(title: "Uncle", img_url: "https://images.unsplash.com/photo-1526328982369-5cfcdffaf1ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")

15.times do
  print(Faker::Quote.yoda)
  Comment.create(content: Faker::Quote.yoda, user_id: rand(15), post_id: rand(15))

end
