import React, { useRef, useState, useEffect, MutableRefObject } from 'react'
import styles from './Header.module.scss'
import { BsSearch } from 'react-icons/bs'
import { TbMail } from 'react-icons/tb'
import { IoNotificationsCircle } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import logo from '@/images/logo176.png'
import clsx from 'clsx'
import components from '@/styles/Components.module.scss'
import { useTranslation } from 'react-i18next'
import { useLocation, Location } from 'react-router-dom'
import { FcList } from 'react-icons/fc'
import { GrClose } from 'react-icons/gr'

type MenuItem = {
  name: string
  to: string
}

var MenuLink = ({ lable, to, location }: { lable: string; to: string; location: Location }) => {
  const match = location.pathname === to
  return (
    <li>
      <Link to={to} className={clsx({ [components.active]: match })}>
        {lable}
      </Link>
    </li>
  )
}

var showMenu = (temps: Array<MenuItem>, location: Location) => {
  // console.log(typeof temps);
  return temps.map((value, key) => {
    return <MenuLink key={key} lable={value.name} to={value.to} location={location}></MenuLink>
  })
}

const Header = (): JSX.Element => {
  const location: Location = useLocation()
  const { t } = useTranslation()

  //Nut  toggle
  // const wrapperRef = useRef() as MutableRefObject<HTMLUListElement>

  const [currencyToggle, setCurrencyToggle] = useState(false)
  const menuRight = useRef() as MutableRefObject<HTMLElement>
  const menuRightCloseBtn = useRef() as MutableRefObject<HTMLElement>
  const [languageToggle, setLanguageToggle] = useState(false)

  const [showModile, setShowModile] = useState(false)

  return (
    <header id="header" className={clsx(styles.header)}>
      <div className={clsx(styles.container)}>
        <div className={styles.logo}>
          <Link to="/">
            <img alt="logo" src={logo}></img>
          </Link>
        </div>
        <nav
          id="navbar"
          className={clsx(styles.navbar, { [styles.navbarMobile]: showModile })}
          ref={menuRight}
        >
          <ul>{showMenu(t('components.header._menus', { returnObjects: true }), location)}</ul>
          <i className={styles.toggleNavigation} onClick={() => setShowModile(!showModile)}>
            {showModile && <GrClose className={styles.close}></GrClose>}
          </i>
        </nav>
        <nav
          id="navbar"
          className={clsx( { [styles.navbar]: !showModile, [styles.userMenu]: showModile })}
          ref={menuRight}
        >
          <ul>
            <li>
              <a>
                USD
                <span className="sc-1b4wplq-0 ifkbzu">
                  <i className="fa fa-angle-down" aria-hidden="true" />
                </span>
              </a>
            </li>
            <li>
              <a>
                USD
                <span className="sc-1b4wplq-0 ifkbzu">
                  <i className="fa fa-angle-down" aria-hidden="true" />
                </span>
              </a>
            </li>
            <li>
              <a> </a>
            </li>
            <li>
              <button className={styles.buttonAccount}>

                Tài khoản
              </button>
            </li>
          </ul>
          <i className={styles.toggleNavigation} onClick={() => setShowModile(!showModile)}>
            {!showModile && <FcList></FcList>}
          </i>
        </nav>
      </div>
    </header>
  )
}

export default Header
