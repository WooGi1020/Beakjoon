def h(x):
    if x.isnumeric():
        return int(x)
    else:
        return x

a, b = map(lambda x:h(x), input().split())
c, d = map(lambda x:h(x), input().split())

if (a >= 19 and b == 'M') or (c >= 19 and d == 'M'):
    print("1")
else:
    print("0")