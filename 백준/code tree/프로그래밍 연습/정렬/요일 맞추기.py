m1, d1, m2, d2 = map(int, input().split())

def day_of_week(r):

    total = r % 7
    day = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    return day[total]

def total_days(m,d):
    nums_of_day =[0,31,28,31,30,31,30,31,31,30,31,30,31]
    total_days = d

    for i in range(1,m):
        total_days+=nums_of_day[i]

    return total_days

diff = total_days(m2,d2)-total_days(m1,d1)
print(day_of_week(diff))