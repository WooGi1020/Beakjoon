n = int(input())
m = list(map(int, input().split()))

m.sort()
print(*m)
m.sort(reverse = True)
print(*m)