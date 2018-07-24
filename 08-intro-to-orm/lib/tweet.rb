class Tweet
  attr_accessor :message, :username
  attr_reader :id


  def self.all


    results = DB[:conn].execute("SELECT * FROM tweets")
    results.map do |sql_tweet_info|
      Tweet.new(sql_tweet_info)
    end


  end

  def initialize(h={})
    @message = h['message']
    @username = h['username']
    @id = h["id"]
  end

  def save
    sql = <<-SQL
    INSERT INTO tweets (message, username)
    VALUES (?, ?)
    SQL
    DB[:conn].execute(sql, "santaize that database", "smort person")
  end
end
