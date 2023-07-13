a, b, c, d = map(int, input().split())

hour, mins = a, b
elapsed_time = 0

while True:
    if hour == c and mins == d:
        break
    
    elapsed_time += 1
    mins += 1

    if mins == 60:
        hour += 1
        mins = 0

print(elapsed_time)