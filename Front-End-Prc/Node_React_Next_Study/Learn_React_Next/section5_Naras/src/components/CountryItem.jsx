import style from './CountryItem.module.css';
import { useNavigate } from 'react-router-dom';

export default function CountryItem({
  code,
  commonName,
  flagEmoji,
  flagImg,
  population,
  region,
  capital,
}) 
{ 
  const nav = useNavigate();

  const onClick = () => {
    nav(`/country/${code}`);
  }

  return <div className={style.container} onClick={onClick}>
    <img className={style.flag_img} src={flagImg} />
    <div className={style.content}>
      <div className={style.CountryDiv}>
        <img 
        className={style.flag_emoji}
        src={flagImg} /> {commonName} 
      </div>  
      <div>지역 : {region}</div>
      <div>수도 : {capital.join(', ')}</div>
      <div>인구 : {population.toLocaleString()}명 </div>
    </div>  
  </div>
}