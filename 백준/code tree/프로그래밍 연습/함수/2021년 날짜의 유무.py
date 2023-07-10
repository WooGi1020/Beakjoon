n, m = map(int, input().split())

def cal(n, m):
    if n > 0 and n <= 12:
        if n == 2:
            if m >= 1 and m <= 28:
                return True
            else:
                return False
        elif n == 4 or n == 6 or n == 9 or n == 11:
            if m >= 1 and m <= 30:
                return True
            else:
                return False
        else:
            if m >= 1 and m <= 31:
                return True
            else:
                return False
    else:
        return False

        
result = cal(n, m)
if result:
    print("Yes")
else:
    print("No")