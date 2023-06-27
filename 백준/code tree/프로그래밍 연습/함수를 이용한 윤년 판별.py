y = int(input())

def is_leap_year(year):
    if year % 4 == 0 and (year % 100 != 0 or year % 400 == 0):
        return True
    else:
        return False

if is_leap_year(y):
    print("true")
else:
    print("false")
