class Animal
  attr_reader :name
  attr_accessor :mood

  def initialize(name)
    @name = name
    @mood = 'nervous'
  end

  def binding_dot_cry
    binding.pry
  end

# provided by the attr_reader macro
  # def name
  #   @name
  # end

  # provided by attr_accessor
  # def mood
  #   @mood
  # end
  #
  # def mood=(new_mood)
  #   @mood = new_mood
  # end
end
