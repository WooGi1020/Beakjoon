def print_star(a):
    if a == 0:
        return
    
    print("* " * a, sep = ' ')
    print_star(a-1)
    print("* " * a, sep = ' ')
    
n = int(input())

print_star(n)