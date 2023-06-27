def pan(n):
    digit_sum = sum(int(digit) for digit in str(n))
    return n % 2 == 0 and digit_sum % 5 == 0

n = int(input())
if pan(n):
    print("YES")
else:
    print("NO")
