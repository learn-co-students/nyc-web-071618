require 'pry'

class Squirrel
  attr_reader :name

  @@all = []

  def initialize(name)
    @name = name
    @@all << self
  end

  def self.all
    @@all
  end

  def make_nest(tree)
    Nest.new(self, tree)
  end

  def my_nests
    Nest.all.select do |nest|
      nest.squirrel == self
    end
  end

  def which_trees
    my_nests.map do |nest|
      nest.tree.type
    end
  end


end # end Squirrel class
