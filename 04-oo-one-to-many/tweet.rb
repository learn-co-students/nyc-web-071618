class Tweet
  attr_accessor :message
  attr_reader :user

  @@all = []

  def initialize(user, message)
    @user = user
    @message = message
    @@all << self #self refers to newly created tweet instance
  end

  def username
    # ask user instance I belong to for their username
    self.user.username
  end

  def self.all
    @@all
  end
end
