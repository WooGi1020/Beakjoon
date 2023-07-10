n, m = map(int, input().split())

mul1 = list(map(int, input().split()))
mul2 = list(map(int, input().split()))

def is_subsequence(A, B):
    n1 = len(A)
    n2 = len(B)
    i = 0  
    j = 0  
    
    while i < n1 and j < n2:
        if A[i] == B[j]:
            i += 1
            j += 1
        else:
            i += 1
    
    return j == n2

result = is_subsequence(mul1, mul2)

if result == True:
    print("Yes")
else:
    print("No")