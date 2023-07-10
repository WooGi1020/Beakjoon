a, b = map(int, input().split())

def cal(n,m):
    if n > m:
        n*=2
        m+=10
    else:
        n+=10
        m*=2
    return n,m
    
a, b = cal(a,b)

print(a, b)