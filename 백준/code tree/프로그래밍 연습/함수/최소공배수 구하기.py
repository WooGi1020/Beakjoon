def gong_goo(n,m):
    for i in range(2, n*m +1):
        if i % n == 0 and i % m == 0:
            break
    print(i)
    
N, M = map(int, input().split())
gong_goo(N,M)
        
        