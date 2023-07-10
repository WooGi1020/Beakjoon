n = int(input())

def re(n):
    if n == 0:
        return
    
    print(n, end = ' ')
    re(n-1)
    print(n, end = ' ')
    
re(n)