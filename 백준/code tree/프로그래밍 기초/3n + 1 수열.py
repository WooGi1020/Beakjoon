cnt = 0
n = int(input())
 
while True:
    if n % 2 == 0:
        n //= 2
        cnt += 1
    elif n % 2 == 1:
        if n != 1:
            n = 3*n + 1
            cnt += 1
        elif n == 1:
            break

print(cnt)