class Programmer

  attr_reader :name, :age

   @@all = []

  def initialize(name, age)
    @name = name
    @age = age
    @@all << self
  end

  def self.all
    @@all
  end

  def self.all_the_names
    self.all.map do |programmer|
      programmer.name
    end
  end

  def self.find_the_youngins
    self.all.select do |programmer|
      programmer.age < 25
    end
  end

  def commits
    Commit.all.select do |commit|
      commit.programmer == self
    end
  end

  def apps
    commits.map do |commit|
      commit.app
    end
  end

  def app_prices
    apps.map do |app|
      app.price
    end
  end

  def avg_app_price
     total = app_prices.reduce(:+)
     total / app_prices.count
  end

  def create_commit(message, time, app)
    Commit.new(message, time, self, app)
  end

end
