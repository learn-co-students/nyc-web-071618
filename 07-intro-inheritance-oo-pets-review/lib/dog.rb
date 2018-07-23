class Dog < Animal
end

# Dog does NOT have an init method Ruby will look up the chain of ancestors [Animal, Object, Kernel, BasiObject] for a method called initialize
# Ruby will find an initialize method on Animal and call that
