# 변수 선언 및 입력
a, b = tuple(map(int, input().split()))


# 문제에서 설명한 대로 a와 b를 변경합니다.
def change_number(a, b):
    if(a > b):
        b *= 2
        a += 25
    else:
        a *= 2
        b += 25

    return a, b


a, b = change_number(a, b)

print(a, b)