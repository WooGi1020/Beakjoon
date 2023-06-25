n = int(input())
mul = []

for i in range(1, n+1):
    if i % 2 == 0 or i % 10 == 5 or (i % 3 == 0 and  i % 9 != 0):
        continue
    mul.append(i)

mul1 = map(str, mul)
print(' '.join(mul1))