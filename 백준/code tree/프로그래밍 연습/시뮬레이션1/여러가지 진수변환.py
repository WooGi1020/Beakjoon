n, b = tuple(map(int, input().split()))
digits = []

while True:
    if n < b:
        digits.append(n)
        break

    digits.append(n % b)
    n //= b

digits.reverse()
print(*digits, sep = '')