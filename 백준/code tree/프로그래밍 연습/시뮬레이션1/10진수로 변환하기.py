n = int(input())
bin = []

while True:
    if n < 10:
        bin.append(n)
        break
    
    bin.append(n % 10)
    n //= 10
    
bin.reverse()
num = 0
for i in range(len(bin)):
    num = num * 2 + bin[i]

print(num)