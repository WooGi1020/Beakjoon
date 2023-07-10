n = int(input())

def cal(a):
    if a == 1:
        return 1
    return cal(a-1) + a
    
print(cal(n))