n = int(input())

def mul(a):
    if a < 10:
        return a ** 2
    
    return mul(a // 10) + ((a % 10) ** 2)

print(mul(n))