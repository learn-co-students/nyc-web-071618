# One to Many Relationships

# The World So Far

- A ruby class that may store some information
- Class called School
  `flatiron = School.new('Flatiron')`

  ```ruby
  class School
    def initialize(name)
      @name = name
    end
  end
  ```

  `flatiron.instructors #=> ['Andrew', 'Evans', 'Dick', 'Vicky']`

  - `evans = Instructor.new('Evans')`
  - `evans.lectures`
  - `flatiron.instructors #=> [<#instructor_instance>]`

---

## Objectives

- Implement one object to many objects relationship
  - One object has many objects
  - One object belongs to another object
    - A universe has many galaxies; a galaxy belongs to a universe
    - An author has many books; a book belongs to an author
    - A user has many tweets; a tweet belongs to a user
- Demonstrate single source of truth
- Infer type of method (class or instance) through naming conventions
- Review `self`

---

## Deliverables

- Create a User class. The class should have these methods:
  - `#initialize` which takes a username and have
  - an accessor method for the username
  - `#tweets` that returns an array of Tweet instances
  - `#post_tweet` that takes a message, creates a new tweet, and adds it to the user's tweet collection
- Create a Tweet class. The class should have these methods:
  - `Tweet#message` that returns a string
  - `Tweet#user` that returns an instance of the user class
  - `Tweet.all` that returns all the Tweets created.
  - `Tweet#username` that returns the username of the tweet's user
