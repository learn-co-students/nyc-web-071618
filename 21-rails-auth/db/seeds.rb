20.times do
  User.create!({
    username: Faker::LordOfTheRings.character,
    password: 'nice',
    profile_photo: Faker::Avatar.image
  })
end
