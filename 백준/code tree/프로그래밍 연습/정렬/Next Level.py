def f(x):
    return x

n,m = map(lambda x:f(x), input().split())

class info:
    def __init__(self, user = "codetree", lv = "10"):
        self.user = user
        self.lv = lv
        
infor = info()

print("user " + infor.user, "lv " + infor.lv, sep = ' ')

infor.user = n
infor.lv = m
print("user " + infor.user, "lv " + infor.lv, sep = ' ')