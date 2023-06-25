
a, b = map(int, input().split())

i = a

while i <= b:
	print(i, end=" ")
	if i % 2 == 1:
		i *= 2
	else:
		i += 3