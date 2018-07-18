require 'pry'

class BankAccount
  attr_accessor :balance, :type
  attr_reader :account_num

  def initialize(balance, account_num, type)
    @balance = balance
    @account_num = account_num
    @type = type
  end

  def deposit(deposit_value)
    @balance += deposit_value
  end

end # end Dog class

bankie = BankAccount.new(10, 1, 'savings')
#
# dog = Dog.new
# dog.name='patty'
# dog2 = Dog.new
# dog2.name='getthestretch'
# def gimmie_that(name_space_has_no_value)
#
#   name_space_has_no_value
# end
# dog = {'name' => 'baxter', 'breed'=> 'basset hound'}
# dog2 = {'name' => 'prince of persia', 'breed'=> 'afghan'}
# dog3 = {'meme'=> 'bad luck brian', 'breed'=>'roll safe'}

# gimmie_that(7)
binding.pry
0
p 'donezo'
