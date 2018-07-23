# Intro to SQL

1. Install the SQLite Browser if you haven't already [here](http://sqlitebrowser.org/)
2. Open the SQLite Browser and click 'File -> Open DataBase'
3. Choose the `chinook.db` file from this repo. This database is open source and maintained by Microsoft (SQL is no fun if you don't have any data)
4. Click the tab that says 'Execute SQL'. Type SQL queries in the box above. Press the play button. See the results of that query in the box below

## What is SQL?
- Structured Query Language
- Responsible for interacting with databases

## What is SQL for?
- Store & persist information
- Manipulate that information

## What kinds of operations can we do in SQL?
**CRUD**
1. Create data
2. Read data
3. Update data
4. Delete data

## What is SQLite3?
Relational database (handles relationships between tables/models)

## Challenges

1. Write the SQL to return all of the rows in the artists table?

```SQL

SELECT * FROM artists;

```

2. Write the SQL to select the artist with the name "Black Sabbath"

```SQL
-- for exact match:
SELECT * FROM artists WHERE name = "Black Sabbath";

-- use "LIKE" for non-exact matches (e.g. lowercase)
SELECT * FROM artists WHERE name LIKE "black sabbath";
-- using "%" with "LIKE" finds matches with anything containing phrase/letter/word
SELECT * FROM artists WHERE name LIKE "%black%";
SELECT * FROM artists WHERE name LIKE "black%";

```

3. Write the SQL to create a table named 'fans' with an autoincrementing ID that's a primary key and a name field of type text

```sql

CREATE TABLE fans (
  id INTEGER PRIMARY KEY,
  name TEXT
);

```

4. Write the SQL to alter the fans table to have a artist_id column type integer?

```sql

-- "If x BELONGS TO y, x must have the y_id"
-- Foreign key is artist_id, fans BELONG TO artist and therefore have an artist_id
ALTER TABLE fans ADD COLUMN artist_id INTEGER;

```

5. Write the SQL to add yourself as a fan of the Black Eyed Peas? ArtistId **169**

```sql

INSERT INTO fans (name, artist_id) VALUES ('Vicky', 169);

```

6. Check out the [Faker gem](https://github.com/stympy/faker). `gem install faker`, open up irb, run `require 'faker'` and then generate a fake name for yourself using `Faker::Name.name`. How would you update your name in the fans table to be your new name?

 ```sql
-- use id rather than other attributes (e.g. name) to find information in table
 UPDATE fans
 SET name = [fake_name_here]
 WHERE id = [my_id_number];
-- e.g.
 UPDATE fans
 SET name = "Ligia Labadie II"
 WHERE id = 1;

 ```

7. Write the SQL to return fans that are not fans of the black eyed peas.

```sql

SELECT * FROM fans WHERE artist_id != 169;

-- you can also nest sql statements
SELECT * FROM fans where artist_id != (SELECT artistid from artists WHERE name = "Black Eyed Peas");

```

8. Write the SQL to display an artists name next to their album title

```sql

SELECT artists.name, albums.title
FROM artists
INNER JOIN albums
ON artists.artistsid = albums.artistid;

```

9. Write the SQL to display artist name, album name and number of tracks on that album

```sql

SELECT artists.name, albums.title, COUNT(tracks.trackid)
FROM artists
INNER JOIN albums
ON artists.artistid = albums.artistid
INNER JOIN tracks
ON tracks.albumid = albums.albumid
GROUP BY albums.albumid;

```

10. Write the SQL to return the name of all of the artists in the 'Pop' Genre

```sql

SELECT artists.name, genres.name
FROM artists
INNER JOIN albums
ON artists.artistid = albums.artistid
INNER JOIN tracks
on tracks.albumid = albums.albumid
INNER JOIN genres
on genres.genreid = tracks.genreid
WHERE genres.name = "Pop";

```
