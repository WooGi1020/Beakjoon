import style from'./Layout.module.css'
import { useNavigate } from 'react-router-dom'

export default function Layout ({children}) {

  const nav = useNavigate();

  const onClick =() => {
    nav('/');
  }

  return <div className="Layout" >
    <header onClick={onClick} className={style.header}>🌏 Naras</header>
    <main className={style.main}>
      {children}
    </main>
  </div>
}