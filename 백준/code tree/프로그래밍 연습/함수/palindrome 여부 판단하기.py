def is_palindrome(string):
    reverse = string[::-1]

    if string == reverse:
        return True
    else:
        return False
    
n = str(input())

if is_palindrome(n):
    print("Yes")
else:
    print("No")