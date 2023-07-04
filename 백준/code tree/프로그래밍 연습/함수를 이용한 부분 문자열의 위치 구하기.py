text = input()
pattern = input()

def is_substr(start_idx):
    n, m = len(text), len(pattern)

    if start_idx + m - 1 >= n:
        return False

    for j in range(m):
        if text[start_idx + j] != pattern[j]:
            return False
    return True

def find_index():
    n = len(text)
    for i in range(n):
        if is_substr(i):
            return i
    return -1


print(find_index())
