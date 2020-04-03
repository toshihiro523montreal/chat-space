# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.create(name:"test", email:"test@yahoo.co.jp", password: "12345678")
a = ('a'..'z').to_a
for i in 0..25
  User.create(name: "#{a[i] * 4}", email:"#{a[i]}@yahoo.co.jp", password: "12345678")
end
for i in 0..9
  a = Group.new(name:"Group#{i}")
  a.user_ids = 1
  a.save
end
