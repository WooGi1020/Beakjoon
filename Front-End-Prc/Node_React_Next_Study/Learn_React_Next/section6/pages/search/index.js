import SubLayout from "@/components/SubLayout"

export default function Search() {
  return <div>Search Page</div>
}

// 모든 함수는 객체이므로, 점문법을 통해 Layout 프로퍼티에 SubLayout 컴포넌트를 할당한 것
Search.Layout = SubLayout;