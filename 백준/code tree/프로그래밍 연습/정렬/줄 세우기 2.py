n = int(input())

class info:
    def __init__(self, hei, wei, num):
        self.hei, self.wei, self.num = hei, wei, num
        
infos = []
for i in range(n):
    hei, wei = map(int, input().split())
    infos.append(info(int(hei), int(wei), i+1))
    
infos.sort(key = lambda x : (x.hei, -x.wei))

for info in infos:
    print(info.hei, info.wei, info.num)