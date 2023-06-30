def sosu(a,b):
    for i in range(a,b+1):
        if i < 2: 
            return False
        for j in range(2, int(i ** 0.5) + 1):
            if i % j == 0:
                return False
        return True
       
def zzac(a, b):
    for i in range(a, b+1):
        digit_sum = sum(int(digit) for digit in str(i))
        if digit_sum % 2 == 0:
            return True
    return False

a,b = map(int, input().split())

cnt = 0
for i in range(a, b+1):
    if sosu(i,i) and zzac(i,i):
        cnt+=1

print(cnt)