next는 pages폴더를 필두로 URL Parameter를 이용해 각 페이지 컴포넌트들을 라우팅

- URL Parameter로 활용할 ==[파일명]==.js
대괄호 안의 파일명은 URL Parameter의 정보로서 활용되므로, 저장하는 파일명에 따라 키 변경

- useRouter
URL Parameter로 이용할 code 등의 정보들이 들어있는 Next가 제공하는 Hook
```JSX
// pages/country/[code].js -> code는 Parameter로 동작
import { useRouter } from "next/router"

export default function Country() {
  const router = useRouter();
  const {code} = router.query;

  return <div>Country {code}</div>
}
```

✅ 만약 추가적인 정보를 불러오기 위해 '/'를 연이어 사용하는 경우
```JSX
// [...code].js
import { useRouter } from "next/router"

export default function Country() {
  const router = useRouter();
  const {code} = router.query;

  return <div>Country {code}</div>
}
```
파일명 앞에 ...를 붙여 파일명에 관련된 Parameter를 다 받아올 수 있도록 작성 (catch All)
-> '\[ \]' 를 두번 겹쳐 사용한다면 없는 경로에도 동적으로 대응할 수 있도록 변경 (Optinal catch All)

- URL Object (Link)
Link를 통해 이동할 페이지의 Parameter를 받아오는 경우, 이를 구조화하여 동적 대응에 용이
```JSX
import Link from "next/link"; // CSR

export default function Home() {
  const code = "KOR";

  return (
    <div>Home Page
      <div>
        <Link href={"/search"}>Search 페이지로 이동</Link>
      </div>
      <div>
        <Link href={{
          pathname:"/country/[code]",
          query:{code : code},
        }}>{code} 페이지로 이동</Link>
      </div>
    </div>
  );
}
```

- URL Object (other)
Button이나 함수를 통해 페이지 라우팅을 구현하는 경우
```JSX
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();

  const onClickBtn =() => {
    router.push('/search'); // 현재 페이지의 경로 변경
  }

  return (
    <div>Home Page
      <div>
        <button onClick={onClickBtn}>Search 페이지로 이동!</button>
      </div>
    </div>
  );
}
```




