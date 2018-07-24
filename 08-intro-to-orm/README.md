
1. Books and Authors where each book has a single author. Books should have a name

books
id  |   title                       | author_id    
1       "stuff my dad says"             1         
2       "stuff my dad says part 2"     1
3       "Art of war"                   2
4       "Ready player 1"                3


authors
id |     name
1    "Justin Halpern"
2    "Sun Tzu"
3    "Earnest Cline"


Q: Write the SQL to find all books written by a certain author given that author's id

```SQL
  SELECT * FROM books WHERE books.author_id = 1
```

2. Books and Authors where each book can have one or MULTIPLE authors. Books should have a title and authors should have a name.

 - What type of relationship is this?
  - Many to Many

  books
  id  |   title                      
  1       "stuff my dad says"                 
  2       "stuff my dad says part 2"     
  3       "Art of war"                   
  4       "Ready player 1"                

  book_authors
  id |      book_id         | author_id
1           1                     1
2           2                     1
3           3                     2
4           4                     3

  authors                      
  id |     name
  1    "Justin Halpern"           
  2    "Sun Tzu"
  3    "Earnest Cline"


  Q. Write the SQL to find all books written by certain author given their name

  ``` SQL
  SELECT * FROM books
  JOIN book_authors
  ON books.id = book_authors.book_id
  JOIN  authors
  ON authors.id = book_authors.author_id
  WHERE authors.name = "Sun Tzu";
  ```

  3. Squirrels have Nests in Trees -- Build table
  squirrels
  id  |   name                      
  1       "Evans"                 
  2       "Alvin"     
  3       "Simon"                   
  4       "Theo"                
<#oaksadokasou78687 @name="Evans">
nests
  id |      squirrel_id         | tree_id
  1           1                     1
  2           2                     1
  3           3                     2
  4           4                     3
<#NEST2386423894328 @squirrel_id = 1, @tree_id = 2>
  trees                      
  id |     name
  1    "Maple tree"           
  2    "Christmas tree"
  3    "Pear tree"

Q: Write the SQL to find all Squrrels in a "Christmas Tree"


```SQL
SELECT * FROM squirrels
JOIN nests
ON squirrel.id = nest.squirrel_id
JOIN  tree
ON trees.id = nests.tree_id
WHERE tree.name = "Christmas tree";
```


## Object Relational Mapper (ORM)

## CRUD

What are the four ways we can interact with Data?

  CREATE
    INSERT INTO books (title) VALUES ('best boook evvveeerrr');
    book = Book.new('best booooook evvveerrrr')

  READ
  SELECT * FROM books ;
  Book.all
  SELECT * FROM books WHERE id = 3 LIMIT 1;
  Book.all.find do |book|
    book.id == 3
    end  

  UPDATE
    UPDATE books SET (title) VALUE ("new book title") WHERE id = 1;
    book.title = "new book title"

  DESTROY
    DELETE * FROM books WHERE id = 3;
    Book.all.delete_if do |book|
      book.id == 3
    end

## Active Record Pattern

 - Each table in our DB should corespond to a ruby class (MODEL) /// class Squirrel similiar squirrels Table
- Instance of a class should be represented as a row in DB
 - Each column within our table matches with an attribute on each instance

## How to persist Data?

- Open up a Pry -- Create a new instance
- What happends when we open a new Pry sesh?

# Code Walkthrough

- bin/run.rb
  -

- Gemfile
    -

- db/twitter.db

-lib/tweets.rb && lib/tweets_app.rb

 - Rake
  -

  - config/environment.rb
  -
