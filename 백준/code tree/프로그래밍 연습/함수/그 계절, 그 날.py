def date(year, month, day):
    if month >= 1 and month <= 12:
        if month == 2:
            if year % 4 == 0 and (year % 100 != 0 or year % 400 == 0):
                if day >= 1 and day <= 29:
                    return True
                else:
                    return False
            else:
                if day >= 1 and day <= 28:
                    return True
                else:
                    return False
                
        elif month == 4 or month == 6 or month == 9 or month == 11:
            if day >= 1 and day <= 30:
                return True
            else:
                return False
            
        else:
            if day >= 1 and day <= 31:
                return True
            else:
                return False
    else:
        return False

year, month, day = map(int, input().split())
result = date(year, month, day)

if result:
    if month >= 12 or month <= 2:
        print("Winter")
    elif month >= 3 and month <= 5:
        print("Spring")
    elif month >= 6 and month <= 8:
        print("Summer")
    elif month >= 9 and month <= 11:
        print("Fall")
else:
    print("-1")
