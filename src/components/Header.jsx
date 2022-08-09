import React from "react"
import { useState, useEffect } from "react"
import styles from "../styles/Header.module.scss"
import { RiCloseFill } from "react-icons/ri"
import { BiMenuAltRight } from "react-icons/bi"

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const menuToggler = () => setMenuOpen((p) => !p)

  return (
    <div className={styles.header}>
      <div className={styles.header__content}>
        <div>
          <span className={styles.logo}>
            SAMUEL{" "}
            <p>
              VENTURA <span className={styles.logo__star}>*</span>
            </p>
          </span>
        </div>
        <div>
          <nav
            className={`${styles.nav} ${menuOpen ? styles[`nav--open`] : {}}`}
          >
            <a className={styles.nav__item} href={"/"}>
              about
            </a>
            <a className={styles.nav__item} href={"/"}>
              skills
            </a>
            <div className={styles.nav__button__container}>
              <Button />
            </div>
          </nav>
        </div>
        <div>
          <div className={styles.header__button__container}>
            <Button />
          </div>
          <button className={styles.header__toggler} onClick={menuToggler}>
            {!menuOpen ? <BiMenuAltRight /> : <RiCloseFill />}
          </button>
        </div>
      </div>
    </div>
  )
}

const Button = () => {
  return <button className={styles.button}>hire me</button>
}

export default Header
