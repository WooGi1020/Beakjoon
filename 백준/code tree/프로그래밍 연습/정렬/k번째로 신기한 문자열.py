def re(x):
    if x.isnumeric():
        return int(x)
    return x

n, k, T = map(lambda x:re(x), input().split())

def weird(n,k,T):
    word = []
    weird_word = []
    for i in range(n):
        s = str(input())
        word.append(s)
    word.sort()
    
    for i in range(n):
        if word[i][:len(T)] == T:
            weird_word.append(word[i])
    
    ans = weird_word[k-1]
    return ans

print(weird(n,k,T))
        
