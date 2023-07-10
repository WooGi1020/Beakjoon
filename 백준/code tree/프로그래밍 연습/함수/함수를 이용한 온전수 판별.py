def ham(a, b):
    cnt = 0
    for i in range(a, b + 1):
        if not (i % 2 == 0 or i % 10 == 5 or (i % 3 == 0 and i % 9 != 0)):
            cnt += 1
    return cnt

a, b = map(int, input().split())
print(ham(a, b))
