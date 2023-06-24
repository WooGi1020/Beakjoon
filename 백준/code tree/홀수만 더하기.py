n = int(input())
hap = 0

for i in range(n):
    m = int(input())
    if m % 2 == 1 and m % 3 == 0:
        hap += m

print(hap)
