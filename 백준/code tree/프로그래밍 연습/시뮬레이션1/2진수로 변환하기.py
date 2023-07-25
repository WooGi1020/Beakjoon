n = int(input())
digit = []

while True:
    if n < 2:
        digit.append(n)
        break
    
    digit.append(n % 2)
    n //= 2
    
digit.reverse()
num = 0

for i in range(5):
    num = num * 2 + digit[i]

print(num)


