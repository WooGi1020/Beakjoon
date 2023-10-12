- 지네릭스란
	여러 타입의 객체를 다루는 메서드나 컬렉션 클래스 컴파일 시 타입 체크를 해주는 기능 (다룰 객체의 타입을 미리 명시하여 번거로운 형변환X)
```
지네릭스의 장점
1. 타입 안정성 제공
2. 타입체크와 형변환을 생략 -> 코드의 간결성
```
```java
// 지네릭스 작성 예시 <...>
ArrayList <Object> arr = new ArrayList <> ();
// <>에 여러가지 타입을 지정
```

- 지네릭 클래스 선언
```java
// 예시
class Box {
	Object item;
	
	void setItem(Object item) {this.item = item;}
	Object getItem() {return item;}
}
// 지네릭 클래스로 변경 시
class Box<T> {
	T item;

	void setItem(T item) {this.item = item;}
	T getItem() {return item;}
}
```
	위 코드에서 T를 타입 변수라고 지칭(임의 참조형 타입)
	기존 코드의 object 타입을 <>를 통해 T라는 임의의 타입으로 변경

- 지네릭스 용어
```java
	Box <T> : 지네릭 클래스, 'T'의 Box 또는 'T Box' 라고 읽음
	T : 타입 변수 or 타입 매개변수
	Box : 원시 타입 (raw type)
	
	ex) Box<String> b = new Box<String>();
```

- 지네릭 타입과 다형성
```
- 참조변수와 생성자의 대입타입은 일치해야함.
- 지네릭 클래스 간의 다형성 성립.
- 매개변수 다형성 성립.
```

- 제한된 지네릭 클래스
```java
// extends를 이용해 대입할 수 있는 타입 제한
class FruitBox<T extends Fruit> {
	ArrayList<T> list = new ArrayList<T>();
}
// Fruit와 그 자손타입만 대입할 수 있도록 제한함
// 인터페이스를 만들 경우에 implements가 아닌 extends 사용
```

- 
```

```