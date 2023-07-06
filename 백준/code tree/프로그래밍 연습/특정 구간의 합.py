n, m = map(int, input().split())

mul = [0] + list(map(int, input().split()))

def cal(a, b):
    total = 0
    for i in range(a, b + 1):
        total += mul[i]
    return total

results = []
for _ in range(m):
    num1, num2 = map(int, input().split())
    result = cal(num1, num2)
    results.append(result)

print(*results, sep='\n')

