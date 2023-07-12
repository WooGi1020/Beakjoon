n = int(input())
m = list(map(int, input().split()))
lst = m

def cal(n, m):
    new_lst = []
    if n == 1:
        new_lst = m[0]
        
    for i in range(n):
        if (i + 1) % 2 == 1:
            tmp = lst[:i+1]
            tmp.sort()
            new_lst.append(tmp[i // 2])
        
    print(*new_lst, sep = ' ')

cal(n,m)