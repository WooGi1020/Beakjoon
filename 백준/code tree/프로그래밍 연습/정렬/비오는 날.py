n = int(input())

class weather:
    def __init__(self, date, day, sky):
        self.date = date
        self.day = day
        self.sky = sky
        
weathers = []
for _ in range(n):
    date, day, sky = tuple(input().split())
    weathers.append(weather(str(date), day, sky))
    
near_idx = None
for i in range(n):
    if weathers[i].sky == "Rain":
        if weathers[i].date < weathers[near_idx].date:
            near_idx = i
            
print(weathers[near_idx].date, weathers[near_idx].day,\
      weathers[near_idx].sky)