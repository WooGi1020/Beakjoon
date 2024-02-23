import { useSearchParams } from "react-router-dom"
import { fetchSearchResults } from "../Api";
import { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import CountryList from "../components/CountryList";
import style from './Search.module.css'

export default function Search() {
  // queryString
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get('q');

  const [countries, setContries] = useState([]);

  const setInitData = async () => {
    const data = await fetchSearchResults(q);
    setContries(data);
  }

  useEffect(() => {
    setInitData();
  }, [q]);

  return <div className={style.container}>
    <SearchBar q={q}/>
    <div>
      <b>{q}</b> 검색결과
    </div>
    <CountryList countries={countries}/>
  </div>
}