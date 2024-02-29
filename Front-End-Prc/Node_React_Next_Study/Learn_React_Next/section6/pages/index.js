import { fetchCountries } from "@/api";

export default function Home({countries}) {
  return (
    <div>
      {countries.map((country) => <div key={country.code}>{country.commonName}</div>)}
    </div>
  );
}

export const getServerSideProps = async()=>{
    // SSR을 위해 서버측에서 컴포넌트에게 전달할 데이터 전달 함수 (page역할)

  const countries = await fetchCountries();
  return {
    props:{
      countries,
    },
  }
}
