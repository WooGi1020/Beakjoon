a,b=map(int,input().split())
c=int(a/b)

print(c,end='.')

a %=b
for _ in range(20):
    a*=10
    print(a // b, end='')
    a%=b