a,b,c = map(str, input().split())

class scr:
    def __init__(self, a, b, c):
        self.a = a
        self.b = b
        self.c = c
        
agent = scr(a,b,c)

print("secret code : " + agent.a, \
      "meeting point : " + agent.b, \
      "time : " + agent.c, sep = '\n')