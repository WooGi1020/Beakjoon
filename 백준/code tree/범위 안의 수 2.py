mul = []

for i in range(10):
    n = int(input())
    if n >= 0 and n <= 200:
        mul.append(n)

total = sum(mul)
aver = total / len(mul)

print(total, "%.1f" % aver, end = ' ')
