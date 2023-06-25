a,b = map(int, input().split())
mul = []
if a <= b:
    for i in range(a, b+1):
        if i % 5 == 0:
            mul.append(i)
elif a>=b:
    for i in range(b, a+1):
        if i % 5 == 0:
            mul.append(i)

hap = sum(mul)
print(hap)