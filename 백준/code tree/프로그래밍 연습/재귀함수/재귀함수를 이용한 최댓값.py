n = int(input())

m = list(map(int, input().split()))

def f(a):
    if len(a) == 1:
        return a[0]
    return max(a[0], f(a[1:]))

print(f(m))