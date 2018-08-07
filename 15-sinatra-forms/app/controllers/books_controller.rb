class BooksController < ApplicationController

  get '/books' do
    @books = Book.all
    erb :"books/index"
  end

  get '/books/new' do
    # this will render the form to create a book
    erb :"books/new"
  end

  get '/books/:id' do
    @book = Book.find(params[:id])
    erb :"books/show"
  end

  post '/books' do
    # this will actually create our book
    @book = Book.create(params[:book])
    redirect "/books/#{@book.id}"
  end

  get '/books/:id/edit' do
    # this will render the form to edit a book
    @book = Book.find(params[:id])
    erb :"books/edit"
  end

  patch '/books/:id' do
    # this will actually edit the book
    @book = Book.find(params[:id])
    @book.update(params[:book])
    redirect "/books/#{@book.id}"
  end

  delete '/books/:id' do
    Book.destroy(params[:id])
    redirect "/books"
  end

end
