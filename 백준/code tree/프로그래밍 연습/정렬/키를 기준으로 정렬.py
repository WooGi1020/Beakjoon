n = int(input())

class info:
    def __init__(self, name, hei, wei):
        self.name, self.hei, self.wei = name, hei, wei

infos = []       
for _ in range(n):
    name, hei, wei = tuple(input().split())
    infos.append(info(name, hei, wei))
    
infos.sort(key = lambda x : x.hei)

for info in infos:
    print(info.name, info.hei, info.wei)