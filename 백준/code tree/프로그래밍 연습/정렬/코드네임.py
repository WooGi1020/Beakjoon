class User:
    def __init__(self, code_name, score):
        self.code_name = code_name
        self.score = score

users = []

for _ in range(5):
    code_name, score = tuple(input().split())
    users.append(User(code_name, int(score)))

min_idx = 0
for i in range(1, 5):
    if users[min_idx].score > users[i].score:
        min_idx = i
        
print(users[min_idx].code_name, users[min_idx].score)
