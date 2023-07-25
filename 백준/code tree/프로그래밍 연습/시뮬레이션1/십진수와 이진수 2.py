n = list(map(int, list(input())))

num = 0
for i in range(len(n)):
    num = num * 2 + n[i]
    
new_num = num * 17

bin = []
while True:
    if new_num < 2:
        bin.append(new_num)
        break
    
    bin.append(new_num % 2)
    new_num //= 2
    
bin.reverse()
print(*bin, sep = '')