import Link from "next/link"; // CSR
import { useRouter } from "next/router";

export default function Home() {
  const code = "ITA";
  const router = useRouter();

  const onClickBtn =() => {
    router.push('/search'); // 현재 페이지의 경로 변경
  }

  return (
    <div>Home Page
      <div>
        <button onClick={onClickBtn}>Search 페이지로 이동!</button>
      </div>
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
