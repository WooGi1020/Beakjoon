# 변수 선언 및 입력
n, m = tuple(map(int, input().split()))
arr = [0] + list(map(int, input().split()))

def get_answer():
    global m

    return_value = 0
    while m:
        return_value += arr[m]
        
        if m % 2 == 0:
            m //= 2
        else:
            m -= 1

    return return_value

    
print(get_answer())