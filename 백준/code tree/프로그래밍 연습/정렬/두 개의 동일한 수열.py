n = int(input())

lst1 = list(map(int, input().split()))
lst2 = list(map(int, input().split()))

lst1.sort()
lst2.sort()

def judge(a):
    for i in range(a):
        if lst1[i] != lst2[i]:
            return False
            break
    return True

if judge(n):
    print("Yes")
else:
    print("No")