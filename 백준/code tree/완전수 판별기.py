n = int(input())
mul = []

for i in range(1, n+1):
    if n % i == 0:
        if i != n:
            mul.append(i)
        
if sum(mul) == n:
   print("P")
else:
    print("N")
