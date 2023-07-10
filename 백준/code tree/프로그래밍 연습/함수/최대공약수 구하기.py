def gong_goo(n, m):
    for i in range(1, min(n,m)+1):
        if n % i == 0 and m % i == 0:
            big = i
    print(big)
    
N,M = map(int, input().split())
gong_goo(N,M)

