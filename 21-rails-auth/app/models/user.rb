class User < ApplicationRecord
  has_secure_password

  # attr_reader :password
  #
  # def password=(plaintext_pw)
  #   self.password_digest = BCrypt::Password.create(plaintext_pw)
  # end
  #
  # def authenticate(plaintext_pw)
  #   # run the STRING password_digest stored in our db through bcrypt
  #   # this will return an instance of a bcrypt pw which has its OWN == method
  #   # call the bcrypt pw == method to verify the user is who they say they ar
  #   BCrypt::Password.new(self.password_digest) == plaintext_pw
  # end

end
