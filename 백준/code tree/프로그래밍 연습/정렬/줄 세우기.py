class Student:
    def __init__(self, height, weight, number):
        self.height = height
        self.weight = weight
        self.number = number

    def __repr__(self):
        return f"{self.height} {self.weight} {self.number}"

n = int(input())
students = []

for i in range(n):
    height, weight = map(int, input().split())
    students.append(Student(height, weight, i+1))

students.sort(key=lambda x: (-x.height, -x.weight, x.number))

for student in students:
    print(student)
