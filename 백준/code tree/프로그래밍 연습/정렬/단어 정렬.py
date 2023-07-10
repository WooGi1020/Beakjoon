n = int(input())
a = []

for i in range(n):
    m = str(input())
    a.append(m)
    
a.sort()
print(*a, sep = '\n')