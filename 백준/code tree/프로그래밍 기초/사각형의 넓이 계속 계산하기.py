def aa(x):
    if x.isnumeric():
        return int(x)
    else:
        return x

while True:
    a,b,c = map(lambda x:aa(x), input().split())
    print(a * b)
    if c == 'C':
        break