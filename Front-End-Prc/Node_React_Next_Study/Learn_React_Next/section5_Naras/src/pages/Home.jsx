import {fetchCountries} from "../Api";
import { useEffect, useState } from "react";
import CountryList from "../components/CountryList";
import SearchBar from "../components/SearchBar";
import style from './Home.module.css'

export default function Home() {

  const [countries, setContries] = useState([]);

  const setInitData = async () => {
    // async가 붙은 함수이므로 await 앞에 붙히기 필수!
    const data = await fetchCountries();
    setContries(data);
  }

  useEffect(() => {
    setInitData();
  }, []);

  return <div className={style.container}>
    <SearchBar />
    <CountryList countries={countries} />
  </div>
}