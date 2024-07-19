## Next.js의 프리(공짜아님)렌더링

---

🔖 브라우저가 페이지를 로딩하기 전에 미리 렌더링 하는것을 의미

- 서버 사이드 렌더링(SSR)
- 정적 생성(SG): **default**

### 정적 생성

---

🔖 브로젝트 빌드 시점에 미리 HTML을 렌더링

- `getStaticProps()`
  - `Props` 객체를 지정 후 페이지 컴포넌트에서 사용
    <br>

```jsx
// getStaticProps()
export async function getStaticProps() {
  const res = await axios("/products/");
  const products = res.data;

  return {
    props: {
      products,
    },
  };
}
// Page Component
export default function Home({ products }) {
  return <ProductList products={products} />;
}
```

- `getStaticPath()`
  - [id].js와 같은 다이나믹 라우팅용 페이지의 정적 생성은 미리 페이지를 지정해야 한다.
  - 객체를 리턴하고, `paths` 배열에서 각 페이지에 해당하는 정보를 넘겨준다.
  - `fallback` 속성을 사용해 정적 생성되지 않은 페이지의 처리 유무를 정할 수 있다.
    <br>

```jsx
export async function getStaticPaths() {
  return {
    paths: [{ params: { id: "1" } }, { params: { id: "2" } }],
    fallback: true,
  };
}
```

- `context` 파라미터를 사용해 필요한 `Params나` `Query를` 참조할 수 있다.
- 예외처리는 `notFound: true`를 사용한다.
  <br>

```jsx
export async function getStaticProps(context) {
  const productId = context.params["id"];

  let product;

  try {
    const res = await axios(`/products/${productId}`);
    product = res.data;
  } catch {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      product,
    },
  };
}
```

- `fallback이` `true일` 경우, `notFound` 대신 예외처리를 해주어야한다.
  <br>

```jsx
export default function Product({ product }) {
  if (!product) {
    return <>로딩 중 ...</>;
  }
  return <>상품 이름: {product.name}</>;
}
```

### 서버사이드 렌더링

---

🔖 Next.js 서버에 리퀘스트가 올 때마다 페이지를 렌더링

- `getServerSideProps()`
  - 객체를 리턴하고 `Props`를 넘겨주어 페이지 컴포넌트에서 사용한다.
    <br>

```jsx
export async function getServerSideProps() {
  const res = await axios("/products/");
  const products = res.data;

  return {
    props: {
      products,
    },
  };
}

export default function Home({ products }) {
  return <ProductList products={products} />;
}
```

### 정적 생성 VS 서버 사이드 렌더링

---

🏷️ 기본적으로 둘다 프리 렌더링이므로, SEO 최적화 및 로딩 속도 향상의 이점을 가진다.

🔖 페이지마다 데이터를 어떻게 보여줄 것인가에 따라, 사용하는 방식이 달라진다.

- 서버 사이드 렌더링
  - 항상 최신 데이터를 보여줘야 하는 경우
  - 데이터가 자주 바뀌는 경우
  - 리퀘스트의 데이터를 사용해야 하는 경우(ex. 헤더, 쿼리스트링, 쿠키 등)
    <br>
    <br>
- 정적 생성
  - 그 외 모든 경우
