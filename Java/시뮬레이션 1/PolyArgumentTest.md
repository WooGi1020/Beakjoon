```java
import java.util.*;

class Product {

int price;

int bonusPoint;

Product(int price) {

this.price = price;

bonusPoint = (int)(price/10.0);

}

Product() {

price = 0;

bonusPoint = 0;

}

}

class Tv extends Product {

Tv() {super(100);}

public String toString() {return "Tv";}

}

class Computer extends Product {

Computer() {super(250);}

public String toString() {return "Computer";}

}

class Audio extends Product {

Audio() {super(50);}

public String toString() {return "Audio";}

}

class Gold extends Product {

Gold() {super(5000);}

public String toString() {return "Gold";}

}

class Buyer {

int money = 1000;

int bonusPoint = 0;

Vector item = new Vector();

void buy(Product p) {

if(money < p.price) {

System.out.println("돈을 더 가져오도록.");

return;

}

money -= p.price;

bonusPoint += p.bonusPoint;

item.add(p);

System.out.println(p + "을/를 구입하셨습니다.");

}

void refund(Product p) {

if(item.remove(p)) {

money += p.price;

bonusPoint -= p.bonusPoint;

System.out.println(p + "을/를 반품하셨습니다.");

}

else {

System.out.println("물건이 없잖아!");

}

}

void summary() {

int sum = 0;

String itemList = "";

if(item.isEmpty()) {

System.out.println("구입한 물건이 없어.");

return;

}

for(int i = 0; i < item.size(); i++) {

Product p = (Product)item.get(i);

sum += p.price;

itemList += (i==0) ? "" + p : ", " + p;

}

System.out.println("돈은 총 " + sum + "만원썼군.");

System.out.println("구입한 물건은 " + itemList + "이다.");

}

}

public class PolyArgumentTest {

public static void main(String args[]) {

Buyer b = new Buyer();

Tv tv = new Tv();

Computer com = new Computer();

Audio audio = new Audio();

Gold gold = new Gold();

b.buy(gold);

b.buy(tv);

b.buy(com);

b.buy(audio);

b.summary();

}

}
```