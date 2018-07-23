class Owner
  @@all_people = []

  attr_reader :species
  attr_accessor :name, :pets

  def initialize(species)
    @species = species
    # @@all << self
    self.class.all << self #self is the new instance
    # self.class is Owner
    #Owner has a class method called Owner.all

    @pets = { :fishes => [], :dogs => [], :cats => [] }
  end

  def say_species
    # "I am a #{self.species}"
    # "I am a #{@species}"
    # species = 'dolphin'
    "I am a #{species}."
    # when i call species, ruby will start by looking for a local variable called species
    # if we do not find one, it will attempt to call self.species
  end

  def buy_fish(fish_name)
    fishy = Fish.new(fish_name)
    self.pets[:fishes] << fishy
    # self.pets[:fishes] << Fish.new(fish_name)
  end

  def buy_cat(cat_name)
    cat = Cat.new(cat_name)
    self.pets[:cats] << cat
  end

  def buy_dog(dog_name)
    dog = Dog.new(dog_name)
    self.pets[:dogs] << dog
  end

  # Class methods
  def self.all
    @@all_people
  end

  def self.reset_all
    # @@all_people.clear
    # self.all = []
    self.all.clear
  end

  def self.count
    self.all.size
  end

end
