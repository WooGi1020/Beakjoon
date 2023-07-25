m1, d1, m2, d2 = map(int, input().split())
day = input()

def day_of_week(diff, day):
    cntday = 0
    total = diff % 7
    days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    
    if diff % 7 != 0:
        for i in range(diff % 7 + 1):
            if day == days[i]:
                cntday += 1

    cntday+=diff//7
    print(cntday)

def total_days(m, d):
    nums_of_day = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
    total_days = d

    for i in range(1, m):
        total_days += nums_of_day[i]

    return total_days

diff = total_days(m2, d2) - total_days(m1, d1)
day_of_week(diff, day)