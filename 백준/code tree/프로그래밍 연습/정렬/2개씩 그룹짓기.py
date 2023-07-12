n = int(input())
m = list(map(int, input().split()))
m.sort()

result = []
for i in range(n):
    result.append(m[i] + m[(2 * n) -1 -i])

print(max(result))


