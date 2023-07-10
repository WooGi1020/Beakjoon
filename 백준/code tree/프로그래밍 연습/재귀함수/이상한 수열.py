n = int(input())

def f(n):
    if n == 1:
        return 1
    if n == 2:
        return 2
    return f(n//3) + f(n-1)

print(f(n))