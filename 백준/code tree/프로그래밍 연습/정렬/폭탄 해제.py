class Bomb:
	def __init__(self, unlock_code, linear_color, time):
		self.unlock_code = unlock_code
		self.linear_color = linear_color
		self.time = time

u_code, l_color, time = tuple(input().split())

b = Bomb(u_code, l_color, int(time))

print(f"code : {b.unlock_code}")
print(f"color : {b.linear_color}")
print(f"second : {b.time}")