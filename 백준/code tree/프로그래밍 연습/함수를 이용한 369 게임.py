def aa(a):
    return a % 3 == 0

def aaa(a):
    return '3' in str(a) or '6' in str(a) or '9' in str(a)

def sam(a,b):
    cnt = 0
    for i in range(a, b+1):
        if aa(i) or aaa(i):
            cnt+=1
    print(cnt)
    
n,m = map(int, input().split())
sam(n,m)