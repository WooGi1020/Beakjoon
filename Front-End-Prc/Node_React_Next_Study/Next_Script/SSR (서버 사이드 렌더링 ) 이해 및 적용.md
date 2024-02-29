페이지 렌더링을 서버 측에서 진행하는 개념

```markdown
< 서버 사이드 렌더링 >

❗모든 페이지가 SSR로 동작한다고 가정
 1. /pages로 페이지 요청
 2. 페이지에 필요한 데이터를 불러와 완성된 HTML 파일 생성
 3. 페이지 반환
 4. 렌더링(React Component을 HTML 변환) 이 완료된 페이지 렌더링(실제 브라우저 렌더링)
    ❗ 전자와 후자의 렌더링은 다른 의미
 5. Component만 제공받아 동적인 이벤트는 발생X (JS파일을 받지않음)
 6. jS Bundle를 제공받음
 7. JS와 HTML 요소들을 연결 (Hydration) 후 최종적인 화면 렌더링 완료
```

- Next.js의 페이지 별 렌더링 전략
```markdown
📁pages
	📂index.js : SSR (서버 사이드 렌더링)
	📂search.js : CSR (클라이언트 사이드 렌더링)
	
	📁country
		📂[code].js : SSG (정적 사이트 생성)
```

- SSR 렌더링
```JSX
// SSR 적용 컴포넌트
export default function Home() {
  return (
    <div>Home Page
      
    </div>
  );
}

// SSR을 위해 서버측에서 컴포넌트에게 전달할 데이터 전달 함수 (page역할)
export const getServerSideProps = async()=>{
  // 무조건 객체를 return 해야함 (데이터를 props 형태로 페이지 컴포넌트에 전달)
  return {
    props:{},
  }
}
```
```markdown
< 과정 >
 1. 브라우저가 Next 서버로 '/' 형태의 페이지 요청
 2. Next 서버가 getServerSideProps() 실행
 3. 필요한 데이터가 무엇인지 확인 후 props 포함 객체 반환
 4. 페이지 컴포넌트가 객체를 전달받고 첫번째 값 확인
 5. 객체의 요소가 HTML에 렌더링 후, 브라우저로 렌더링 (렌더링된 페이지 렌더링)

🚫getServerSideProps()는 Next에서만 실행되는 함수 -> 브라우저용 명령어 사용 제한
✅객체를 전달받은 함수는 서버와 브라우저 측에서 최소 한번 실행되므로, 명령어 사용 가능
```

- API 호출
서버 자체에서 API를 호출하고 적용 및 렌더링하여 브라우저에 전달
```markdown
< React(CSR)와의 차이점 >
 React는 API 호출 시 브라우저가 렌더링될 때마다 API를 호출하지만 Next는 서버가 호출 후 전달  하므로 리렌더 시 브라우저의 API 호출 X 
```

- API 호출이 동적 경로 (queryString 등)에 대응하는 경우
```JSX
export default function Search({countries}) {
  return <div>{countries.map((country) => (
      <div key={country.code}>{country.commonName}</div>))}
    </div>
}

export const getServerSideProps = async (context) => {
  // 1. 검색 결과 API 호출
  // 2. 검색 결과 Props 리턴

  const {q} = context.query;

  let countries = [];
  if(q){
    countries = await fetchSearchResults(q);
  }

  return {
    props: {
      countries, // 객체 형태로 API의 데이터 전달
    }
  }
}
```



