import style from './Layout.module.css'

export default function Layout({children}) {
  return <div className="Layout">
    <header className={style.header}>NARAS 🌏</header>
    <main className={style.main}>{children}</main>
    </div>
}