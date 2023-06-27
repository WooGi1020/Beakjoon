a, b = tuple(map(int, input().split()))

def is_prime(n):
    if n == 1:
        return False

    for i in range(2, n):
        if n % i == 0:
            return False

    return True

sum_val = 0
for i in range(a, b + 1):
    if is_prime(i):
        sum_val += i

print(sum_val)