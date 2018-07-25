class Commit

  attr_reader :message, :time, :programmer, :app

  @@all = []

  def initialize(message, time, programmer, app)
    @message = message
    @time = time
    @programmer = programmer
    @app = app
    @@all << self
  end

  def self.all
    @@all
  end




end
