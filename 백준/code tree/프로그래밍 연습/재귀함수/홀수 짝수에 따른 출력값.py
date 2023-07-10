n = int(input())

def f(n):
    if n % 2 == 0:
        if n == 1 or n == 0:
            return 0
        return n + f(n-2)
    
    if n % 2 == 1:
        if n == 1:
            return 1
        return n + f(n-2)
    
print(f(n))
