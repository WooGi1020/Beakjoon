a = input().rstrip()

def judge(a):
    for i in range(len(a) - 1):
        if a[i] != a[i+1]:
            return False
    return True

if judge(a):
    print("No")
else:
    print("Yes")


