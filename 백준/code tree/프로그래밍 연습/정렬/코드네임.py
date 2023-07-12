class Agent:
    def __init__(self, codename, score):
        self.codename = codename
        self.score = score

agents = []
for _ in range(5):
    while True:
        codename, score = input().split()
        if score.isdigit():
            agents.append(Agent(codename, int(score)))
            break
        else:
            print("유효한 점수를 입력해주세요.")

min_score_agent = agents[0]
for agent in agents[1:]:
    if agent.score < min_score_agent.score:
        min_score_agent = agent

print(f"제일 점수가 낮은 요원: {min_score_agent.codename}, 점수: {min_score_agent.score}")
