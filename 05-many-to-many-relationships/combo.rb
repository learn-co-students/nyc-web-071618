require 'pry'
require_relative 'trees'
require_relative 'squirrels'
require_relative 'nests'


tree1 = Tree.new('pine', '10ft')
tree2 = Tree.new('apple', '50ft')
tree3 = Tree.new('pear', '150ft')
squirrel1 = Squirrel.new('alvin')
squirrel2 = Squirrel.new('simon')
squirrel3 = Squirrel.new('theo')
nest1 = Nest.new(squirrel1, tree1)
nest2 = Nest.new(squirrel1, tree2)
nest3 = Nest.new(squirrel1, tree3)
nest4 = Nest.new(squirrel2, tree3)
nest5 = Nest.new(squirrel2, tree1)
nest6 = Nest.new(squirrel3, tree2)


## Squirrel Make a new nest
## Squirrel is forgetful, how many nests do I have?
## Squirrel wants to know which trees I have nests in?

## Tree has how many nests?
## Tree has how many squirrels?

binding.pry
0
