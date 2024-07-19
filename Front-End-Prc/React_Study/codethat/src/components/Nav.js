import Container from "./Container";
import { Link, NavLink } from "react-router-dom";
import UserMenu from "./UserMenu";
import logoImg from "../assets/logo.svg";
import styles from "./Nav.module.css";

function handleActive({ isActive }) {
  return {
    textDecoration: isActive ? "underline" : undefined,
  };
}

function Nav() {
  return (
    <div className={styles.nav}>
      <Container className={styles.container}>
        <img src={logoImg} alt="Codethat Logo" />
        <ul className={styles.menu}>
          <li>
            <NavLink to="/courses" style={handleActive}>
              카탈로그
            </NavLink>
          </li>
          <li>
            <NavLink to="/questions" style={handleActive}>
              커뮤니티
            </NavLink>
          </li>
          <li>
            <UserMenu />
          </li>
        </ul>
      </Container>
    </div>
  );
}

export default Nav;
