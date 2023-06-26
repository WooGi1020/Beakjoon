mul = []
sat = True

for i in range(5):
    a = int(input())
    mul.append(a)

for i in range(len(mul)):
    if not mul[i] % 3 == 0:
        sat = False
        
if sat:
    print(1)
else:
    print(0)

    
        