# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
first_list = List.create(name: 'building api')
second_list = List.create(name: 'Weekend Plans')

task1 = Task.create(name: 'api writing', list: first_list)
task2 = Task.create(name: 'groceries', list: first_list)
Task.create(name: 'shopping', list: second_list)
Task.create(name: 'kids', list: second_list)
