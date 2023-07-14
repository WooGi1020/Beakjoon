your_day, your_hour, your_min = map(int, input().split())

start_day, start_hour, start_min = 11, 11, 11
elapsed_time = 0

elapsed_time = ((your_day - start_day) * 24 * 60) + ((your_hour - start_hour) * 60) + \
                    (your_min - start_min)
                    
if your_day < 11 or (your_day == 11 and your_hour < 11) or (your_day == 11 and your_hour == 11 and your_min < 11):
    print(-1)
else:
    print(elapsed_time)
    
    