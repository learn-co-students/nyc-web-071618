require 'rest-client'
require 'json'
require 'pry'

url = 'https://www.googleapis.com/books/v1/volumes?q=ruby+programming'

resp = RestClient.get(url)
json = JSON.parse(resp)

books = json['items'] #.class #Array
books.first.keys
books.first['volumeInfo']['title']
authors = books.first['volumeInfo']['authors']
authors.join(' & ')

books.each do |book|
  p book['volumeInfo']['title']
  p book['volumeInfo']['authors'].join(' & ')
  p '*' * 25
end

def get_books(url)
  resp = RestClient.get(url)
  json = JSON.parse(resp)
  books = json['items']
end

def print_books(book_array)
  book_array.each do |book|
    print_book(book)
  end
end

def print_book(book)
  author = book['volumeInfo']['authors']
  p book['volumeInfo']['title']
  if author
    p author.join(' & ')
  end
  p '*' * 25
end

books = get_books(url)
print_books(books)
#describe the refactor -- method name -single responsibility

binding.pry



0
