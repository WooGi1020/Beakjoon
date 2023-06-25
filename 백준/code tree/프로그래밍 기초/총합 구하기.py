a,b = map(int, input().split())
hap=0
for i in range(a, b+1):
    if i % 6 == 0 and i % 8 != 0:
        hap+=i
print(hap)