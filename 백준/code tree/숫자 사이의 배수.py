a,b=map(int,input().split())
hap = 0
pyung = 0
num = 0

for i in range(a, b+1):
    if i % 5 == 0 or i % 7 == 0:
        hap += i
        num += 1
pyung = hap / num        
print(hap, "%0.1f" % pyung)