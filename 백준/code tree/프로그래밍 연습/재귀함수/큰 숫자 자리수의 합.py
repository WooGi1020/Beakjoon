a,b,c = map(int, input().split())

mul = str(a*b*c)

def f(n):
    if len(n) == 1:
        return int(n)
    return int(n[0]) + f(n[1:])

print(f(mul))