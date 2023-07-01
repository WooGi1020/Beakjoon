n = int(input())

lst = list(map(int, input().split()))

def abs(lst):
    for i in range(0, len(lst)):
        if lst[i] < 0:
            lst[i] = lst[i] * -1
    return lst
n = abs(lst)

for elem in lst:
    print(elem, end = ' ')