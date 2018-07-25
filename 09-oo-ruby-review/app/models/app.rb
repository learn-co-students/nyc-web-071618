class App

  attr_reader :name, :price

  @@all = []

  def initialize(name, price)
    @name = name
    @price = price
    @@all << self
  end

  def self.all
    @@all
  end

end
