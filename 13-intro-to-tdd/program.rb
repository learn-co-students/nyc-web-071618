require 'pry'

def is_palindrome?(word)
  # if word.length >= 2 && word.length < 50 && word.class == String
  #   word.downcase == word.downcase.reverse
  # else
  #   false
  # end


  raise ArgumentError if !word.is_a?(String)
  return false if word.length < 2

  downcased_word = word.downcase.gsub(/\W/,"")
  downcased_word == downcased_word.reverse
end
