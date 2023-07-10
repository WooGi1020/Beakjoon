n = int(input())
m = list(map(int, input().split()))

def gcd(a, b):
    if b == 0:
        return a
    return gcd(b, a % b)

def lcm_recursive(numbers, n):
    if n == 1:
        return numbers[0]
    else:
        current_lcm = lcm_recursive(numbers, n - 1)
        gcd_value = gcd(current_lcm, numbers[n - 1])
        return (current_lcm * numbers[n - 1]) // gcd_value

print(lcm_recursive(m, n)

