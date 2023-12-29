### HTML, CSS, JS 기본 매커니즘

==HTML은 CSS와 JS를 이어주는 접착제와도 같다.==
console을 활용하여 HTML을 JS의 관점에서 관찰하면 왜 JS가 HTML을 문서객체모델로서 인식하는지 이해할 수 있다.

```markdown
JS로 HTML element 가져오기
ex) 
 const a = document.getElementById("tagId");
 const a = document.querrySelector("#tagId");
 const a = document.getElementByClassName("tagClass");
```


```markdown
JS로 가져온 HTML element의 event 다루기

ex)
 const a = document.getElementById("tagId");
 a.addEventListener("click");
```

```markdown

```