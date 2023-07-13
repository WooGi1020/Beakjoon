class good:
    def __init__(self, name, code):
        self.name = name
        self.code = code
        
good1 = good(name="codetree", code="50")

name, code = input().split()
good2 = good(name, code)

print("product " + good1.code + " is " + good1.name)
print("product " + str(good2.code) + " is " + good2.name)
