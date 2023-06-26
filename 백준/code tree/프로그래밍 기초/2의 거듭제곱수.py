n = int(input())
prod = 1
x = 0

while True:
    prod *= 2
    x += 1
    if prod == n:
        break

print(x)