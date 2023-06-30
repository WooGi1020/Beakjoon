def chan(x):
    if x.isnumeric():
        return int(x)
    else:
        return x
    
def add(a,b):
    return a+b

def sub(a,b):
    return a-b

def mul(a,b):
    return a*b

def div(a,b):
    return a/b

a,o,c = map(lambda x : chan(x), input().split())

if o == '+':
    print(a, '+', c, '=', add(a,c))
elif o == '-':
    print(a, '-', c, '=', sub(a,c))
elif o == '*':
    print(a, '*', c, '=', mul(a,c))
elif o == '/':
    print(a, '/', c, '=', int(div(a,c)))
else:
    print("False")