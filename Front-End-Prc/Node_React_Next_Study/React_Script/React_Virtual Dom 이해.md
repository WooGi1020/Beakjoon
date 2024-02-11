---
tistoryBlogName: coding-woogi
tistoryTitle: React_Virtual Dom 이해
tistoryVisibility: "3"
tistoryCategory: "1413475"
tistorySkipModal: true
tistoryPostId: "46"
tistoryPostUrl: https://coding-woogi.tistory.com/46
---
### 브라우저의 렌더링 과정

주요 렌더링 경로(critical Rendering Path)를 통해 브라우저가 코드를 알아보기 쉽게 해석
-> DOM트리 형태로 변환

- Render Tree
HTML로 작성한 요소의 배치 및 모양, CSS로 작성한 요소들의 스타일이 합쳐진 ==청사진==

- Layout
화면에 나타날 요소들의 위치 및 크기 결정

- Painting
실제 요소를 화면에 그려내는 과정

```Markdown
< Browser Rendering >

HTML - DOM
		
	  Render Tree - Layout - Painting
		  
CSS  - CSSOM
```

JS의 적용으로 DOM 수정

- Reflow, Repainting
렌더링 과정 재진행, 이에 따라 발생하는 Reflow와 Repainting을 ==최소화==를 목표
-> 성능의 최적화
```Markdown
< RE: Browser Rendering >

	HTML - DOM
			
JS ->	  Render Tree - Layout - Painting
			  
	CSS  - CSSOM
```

==동시에 일어나는 업데이트를 최대한 모아 실행하여 DOM의 수정을 최소화==
-> React의 Virtual DOM을 통해 해결(빠른 업데이트를 구현)

```markdown
< React Virtual DOM >

Virtual DOM - Upating Element(...) -> -> ->

Actual DOM - Rendering(1)
```