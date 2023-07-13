n = int(input())

class info:
    def __init__(self, name, gr1, gr2, gr3):
        self.name, self.gr1, self.gr2, self.gr3 = name, gr1, gr2, gr3

infos = []        
for _ in range(n):
    name, gr1, gr2, gr3 = tuple(input().split())
    infos.append(info(name, int(gr1), int(gr2), int(gr3)))
 
infos.sort(key = lambda x : (x.gr1 + x.gr2 + x.gr3))   

for info in infos:
    print(info.name, info.gr1, info.gr2, info.gr3)