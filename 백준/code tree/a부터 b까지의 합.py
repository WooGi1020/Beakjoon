a,b = map(int, input().split())
hap = 0

for i in range(a, b+1):
    hap += i

print(hap)