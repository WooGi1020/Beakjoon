n = int(input())
a = []

for i in range(0, n):
    a.append(list(map(int, input().split())))

for i in range(0, n):
    if a[i][0] % 2 == 1 and a[i][0] % 3 == 0:
        print("%d" %a[i][0], end='\n')