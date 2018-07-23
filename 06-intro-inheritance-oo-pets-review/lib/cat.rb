class Cat < Animal
  attr_accessor :num_lives

  def initialize(name)
    # super will look at parent (super) class -> Animal, for a method of the same name -> initialize
    super(name) # Animal#initialize(name)
    @num_lives = 9
  end

  def binding_dot_cry
    super
  end
end
