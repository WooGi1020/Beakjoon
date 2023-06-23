def a(x):
    if x.isnumeric():
        return int(x)
    return x

a, b = map(lambda x:a(x), input().split())

if a == 'A':
    for i in range(1, b+1):
        print(i, end = ' ')
else:
    for i in range(b, 0, -1):
        print(i, end = ' ')