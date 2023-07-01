n = int(input())

lst = list(map(int, input().split()))

def zzac(lst):
    for i in range(0, len(lst)):
        if lst[i] % 2 == 0:
            lst[i] = lst[i] // 2
    
zzac(lst)
for i in range(0, len(lst)):
    print(lst[i], end = ' ')