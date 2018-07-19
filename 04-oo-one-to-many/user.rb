class User
  attr_accessor :username

  @@all = []

  def initialize(username)
    @username = username
    @@all << self
  end

  def tweets
    # ask Tweet.all for the tweets authored by self
    Tweet.all.select do |tweet_instance|
      tweet_instance.user == self
    end
  end

  def post_tweet(message)
    # user_instance.post_tweet('great # coffee')
    Tweet.new(self, message)
  end

  def self.find_by_username(username)
    @@all.find do |user_instance|
      user_instance.username == username
    end
  end

  # methods created by attr_accessor :username
  # def username
  #   @username
  # end
  #
  # def username=(username)
  #   @username = username
  # end
end
