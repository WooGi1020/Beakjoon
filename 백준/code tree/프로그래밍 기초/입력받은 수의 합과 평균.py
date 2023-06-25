n = int(input())

mul= []

for i in range(n):
    m = int(input())
    mul.append(m)
    
total = sum(mul)
average = total / n

print(total, "%.1f" % average, sep = ' ')