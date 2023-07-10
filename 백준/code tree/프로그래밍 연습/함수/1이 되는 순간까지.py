n = int(input())
cnt = 0

def f(n):
    global cnt
    if n == 1:
        return cnt
    
    if n % 2 == 0:
        cnt += 1
        return f(n // 2)
        
    else:
        cnt += 1  
        return f(n // 3)
    
print(f(n))
    
    
          