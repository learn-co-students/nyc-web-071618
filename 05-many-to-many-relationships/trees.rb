require 'pry'

class Tree
  attr_reader :type, :height

  @@all = []

  def initialize(type, height)
    @type = type
    @height = height
    @@all << self
  end

  def self.all
    @@all
  end

  def my_nests
    Nest.all.select do |nest|
      nest.tree == self
    end
  end

    def how_many_nests
      my_nests.length
    end



end # end Tree class
