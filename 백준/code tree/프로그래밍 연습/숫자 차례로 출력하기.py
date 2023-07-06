n = int(input())

def print_num(a):
    if a == 0:
        return
    
    print_num(a-1)
    print(a, end = ' ')
    
def print_rev_num(b):
    if b == 0:
        return
    
    print(b, end = ' ')
    print_rev_num(b-1)
    
print_num(n)
print()
print_rev_num(n)