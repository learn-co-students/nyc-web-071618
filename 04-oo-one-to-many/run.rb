require 'pry'
require_relative './tweet'
require_relative './user'

coffee_dad = User.new('coffee_dad')
coffee_dad.post_tweet('coffee time')
coffee_dad.post_tweet('It is time for them to pay for what they have done.')

binding.pry
puts 'HI'
