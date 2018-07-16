require 'pry'

def game_hash
  {
    home: {
      team_name: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: [
        {
          player_name: "Alan Anderson",
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slam_dunks: 1
        }, {
          player_name: "Reggie Evans",
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slam_dunks: 7
        }, {
          player_name: "Brook Lopez",
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slam_dunks: 15
        }, {
          player_name: "Mason Plumlee",
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slam_dunks: 5
        }, {
          player_name: "Jason Terry",
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slam_dunks: 1
        }
      ]
    },
    away: {
      team_name: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: [
        {
          player_name: "Jeff Adrien",
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slam_dunks: 2
        }, {
          player_name: "Bismak Biyombo",
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slam_dunks: 10
        }, {
          player_name: "DeSagna Diop",
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slam_dunks: 5
        }, {
          player_name: "Ben Gordon",
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slam_dunks: 0
        }, {
          player_name: "Brendan Haywood",
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slam_dunks: 12
        }
      ]
    }
  }
end


def num_points_scored(name)
  # look at game hash
  # find player i'm looking for
  # return the number of points they've scored
  player_to_find = find_the_player(name)
  player_to_find[:points]
  # find_the_player(name)[:points]
end

def shoe_size(name)
  # find the player returns a hash {player_name: 'name', shoe: 10}[:shoe]
  find_the_player(name)[:shoe]
  #code
end

def team_colors(team_name)
  if game_hash[:home][:team_name] == team_name
    game_hash[:home][:colors]
  else
    game_hash[:away][:colors]
  end
end

def team_names
  game_hash.map do |team, team_specs|
    team_specs[:team_name]
  end
  [game_hash[:home][:team_name]].concat([game_hash[:away][:team_name]])
end

def find_the_player(name)
  all_players = game_hash[:home][:players].concat(game_hash[:away][:players])

  player_to_find = all_players.find do |player_hash|
    player_hash[:player_name] == name
  end
  # will return single player hash based on name param
end


def instructors
  [
    {name: 'andrew', hometown: 'los angeles'},
    {name: 'evans', hometown: 'shanghai'},
    {name: 'dick', hometown: 'nova'},
    {name: 'vicky', hometown: 'east brunswick'}
  ]
end

def find_instructor(name)
  instructors.find do |instructor_hash|
    instructor_hash[:name] == name
  end
  # pass in 'evans' should return hash for evans
  # return instructor with matching name
  #code
end

def all_names
  instructors.map do |instructor_hash|
    instructor_hash[:name]
  end
  # return JUST the names of the instructors
  # ['andrew', 'evans', 'dick']
  #code
end
