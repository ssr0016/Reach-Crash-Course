import style from './NavbarComponets.module.css'

const NavbarComponents = () => {
  return (
    <>
        <nav className={style.navbar}>
            <div className={style.logo}>
                <h2>LOGO</h2>
            </div>
            <ul className={style["navbar-ul"]}>
                <li>
                    <a style={{borderBottom: "2px solid white"}}>Home</a>
                </li>
                <li>
                    <a style={{borderBottom: "2px solid white", color: "green"}}>Services</a>
                </li>
                <li>
                    <a style={{borderBottom: "2px solid white"}}>Contact</a>
                </li>
                <li>
                    <a style={{borderBottom: "2px solid white"}}>About</a>
                </li>
            </ul>
        </nav>
    </>
  )
}

export default NavbarComponents