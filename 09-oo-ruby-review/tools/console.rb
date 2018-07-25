require_relative '../config/environment.rb'

dick = Programmer.new("Dick", 27)
elbin = Programmer.new("Elbin", 22)
ralph = Programmer.new("Ralph", 21)
ronald = Programmer.new("Ronald", 30)
ann = Programmer.new("Ann", 23)

dateme = App.new("Date Me (please)", 5)
reddit = App.new("Reddit", 60)
the_facebook = App.new("The Facebook", 500000)
bus_thyme = App.new("Bus Thyme", 0)

first_commit = Commit.new("done", 10, dick, the_facebook)
 Commit.new("done", 10, dick, reddit)
 Commit.new("done", 10, dick, bus_thyme)
second_commit = Commit.new("done", 9, ann, the_facebook)









binding.pry
