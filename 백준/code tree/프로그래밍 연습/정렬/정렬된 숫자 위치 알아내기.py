n = int(input())

class su:
    def __init__(self, num, _num):
        self.num, self._num = num, _num

m = list(map(int, input().split()))

judge = []
for i in range(n):
    judge.append(su((m[i]), i+1))

judge.sort(key = lambda x : x.num)

for i in range(n):
    for j in range(n):
        if judge[j]._num == i+1:
            print(j + 1, end = ' ')

