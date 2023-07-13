class info:
    def __init__(self, name, hei, wei):
        self.name, self.hei, self.wei = name, hei, wei
 
infos = []       
for _ in range(5):
    name, hei, wei = tuple(input().split())
    infos.append(info(name, int(hei), float(wei)))
    
infos.sort(key = lambda x : x.name, reverse = False)
print("name")
for info in infos:
    print(info.name, info.hei, info.wei)

print()
infos.sort(key = lambda x : -x.hei)
print("height")
for info in infos:
    print(info.name, info.hei, info.wei)