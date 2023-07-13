class address:
    def __init__(self, name, addnum, area):
        self.name = name
        self.addnum = addnum
        self.area = area
        
n = int(input())

per = []
for _ in range(n):
    name, addnum, area = tuple(input().split())
    per.append(address(name, str(addnum), area))
    
max_idx = 0
for i in range(1, n):
    if per[max_idx].name < per[i].name:
        max_idx = i

print("name " + per[max_idx].name)
print("addr " + per[max_idx].addnum)
print("city " + per[max_idx].area)
