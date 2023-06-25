mul = []
while True:
    n = int(input())
    if n % 2 == 0:
        print(n // 2)
        mul.append(n)
    if len(mul) == 3:
        break        