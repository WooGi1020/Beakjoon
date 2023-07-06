n = int(input())

def print_star(a):
    if a == 0:
        return
    
    print_star(a-1)
    print("*" * a)
    
print_star(n)