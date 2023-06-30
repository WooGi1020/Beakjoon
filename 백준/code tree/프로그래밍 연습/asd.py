def f(x, y):
    return 2 * y - x

x = 1
for i in range(6):
    x = f(x, -i)
    x = f(x, i)

print(x)