# ActiveRecord Associations Review

### has_many belongs_to association:

- In our application, a `Studio` `has_many` `VideoGames`. Therefore, our schema should look like this:

  ```ruby
  # db/schema.rb
  create_table "studios", force: :cascade do |t|
    t.string "name"
  end

  create_table "video_games", force: :cascade do |t|
    t.string  "title"
    t.integer "studio_id"
  end
  ```

- Because a video game `belongs_to` a `Studio` it will need the foreign key of the studio it belongs to.

  - Cats/dogs wear collars with their owner names to associate them with their owners. Similar rules apply here.

- The corresponding models (ruby classes) should look like this:

  ```ruby
  # app/models/studio.rb
  class Studio < ActiveRecord::Base
    has_many :video_games
  end

  ############################################
  # app/models/video_game.rb
  class VideoGame < ActiveRecord::Base
    belongs_to(:studio)
    # belongs_to :studio
  end
  ```

- The macros (has_many, belongs_to) provide `Studio` and `VideoGame` instances with extra methods:

```ruby
  atari = Studio.create(name: 'atari')
  pong = VideoGame.create(title: 'pong', studio: atari)
  # pong = VideoGame.create(title: 'pong', studio_id: 1)
```

- I can either pass `VideoGame.create` a studio **instance** or a **studio_id** when creating it

- I can also see all the video game instances associated with a studio instance, and the studio that a game belongs to:
  ```ruby
    pong.studio # => #<Studio:0x00007f8c62adb1a0 id: 3, name: "atari"> "pong", studio_id: 3>
    atari.video_games # => [#<VideoGame:0x00007f8c62be6ae0 id: 4, title: "pong", studio_id: 3>]
  ```
- Also note that `pong.studio` returns a **single** studio instance whereas `atari.video_games` returns a **collection** (array-like object) of video game instances

---

### many to many association

- In our application, a `Character` can appear in many video games and a `VideoGame` can have a cast with many characters. The association between character and game is a many to many
- Because a game can have many characters and a character can appear in many games, we need some way to associate video games and characters together:

![](https://i.stack.imgur.com/brOxP.png)

- Our schema therefore, should look like this:

  ```ruby
  # db/schema.rb
  create_table "character_video_games", force: :cascade do |t|
    t.integer "character_id"
    t.integer "video_game_id"
  end

  create_table "characters", force: :cascade do |t|
    t.string "name"
  end

  create_table "video_games", force: :cascade do |t|
    t.string  "title"
    t.integer "studio_id"
  end
  ```

- And our Models:

  ```ruby
  # app/models/character_video_game.rb
  class CharacterVideoGame < ActiveRecord::Base
    belongs_to :character
    belongs_to :video_game
  end

  #############################################

  # app/models/character.rb
  class Character < ActiveRecord::Base
    has_many :character_video_games
    has_many :video_games, through: :character_video_games
  end

  #############################################

  # app/models/video_game.rb
    class VideoGame < ActiveRecord::Base
      belongs_to(:studio)
      has_many :character_video_games
      has_many(:characters, { through: :character_video_games })
      # belongs_to :studio
    end
  ```

- These macros allow us to create the association between characters and video games:
  ```ruby
  mario = Character.create(name: 'mario')
  pong = VideoGame.last
  pong.characters << mario
  # mario_and_pong = CharacterVideoGame.create({video_game: pong, character: mario})
  ```
- Creating the association means creating a new **record** in our join table. This record will hold the _id_ of a character instance and the _id_ of a video game.
- This association can be created in two ways:
  ```ruby
  mario_and_pong = CharacterVideoGame.create({video_game: pong, character: mario})
  ```
  ```ruby
  pong.characters << mario
  ```
- **MAJOR KEY ALERT 🔑**: the `ActiveRecord` shovel (`<<`) operator will create a new **record** in our join table: `character_video_games`. Amazing

![](https://media.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif)

---

##### External Resources:

- [ActiveRecord Associations Docs](https://guides.rubyonrails.org/association_basics.html)
