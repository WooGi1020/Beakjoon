n = int(input())

class graph:
    def __init__(self, x, y, num):
        self.x, self.y, self.num = x, y, num

dist = []
for i in range(n):
    x, y = tuple(input().split())
    dist.append(graph(int(x), int(y), i+1))

dist.sort(key = lambda x : (abs(x.x)+abs(x.y), i))

for graph in dist:
    print(graph.num)


    
