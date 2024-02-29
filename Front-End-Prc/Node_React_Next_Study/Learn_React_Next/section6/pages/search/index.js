import { fetchSearchResults } from "@/api";
import SubLayout from "@/components/SubLayout"

export default function Search({countries}) {
  return <div>{countries.map((country) => (
      <div key={country.code}>{country.commonName}</div>))}
    </div>
}

// 모든 함수는 객체이므로, 점문법을 통해 Layout 프로퍼티에 SubLayout 컴포넌트를 할당한 것
Search.Layout = SubLayout;

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
      countries,
    }
  }
}