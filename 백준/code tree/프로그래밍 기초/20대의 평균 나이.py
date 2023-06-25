mul = []
aver = 0
while True:
    n = int(input())
    if n >= 20 and n <= 29:
        mul.append(n)
    else:
        break
aver = sum(mul) / len(mul)
print("%.2f"%aver)