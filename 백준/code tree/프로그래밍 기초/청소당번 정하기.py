n = int(input())
cnt1 = 0
cnt2 = 0
cnt3 = 0

for i in range(1, n+1):
    if i % 2 == 0:
        if i % 3 != 0 and i % 12 != 0: 
            cnt1+=1
    if i % 3 == 0:
        if i % 12 != 0:
            cnt2+=1
    if i % 12 == 0:
        cnt3+=1

print(cnt1, cnt2, cnt3)