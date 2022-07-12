import React, { useRef, useState, useEffect, MutableRefObject, memo } from 'react'
import Styles from './Header.module.scss'
import { BsSearch } from 'react-icons/bs'
import { TbMail } from 'react-icons/tb'
import { IoNotificationsCircle } from 'react-icons/io5'
// import { Link } from 'react-router-dom'
import logo from '@/images/logo176.png'
import clsx from 'clsx'
import Components from '@/Styles/Components.module.scss'
import { useTranslation } from 'react-i18next'
import { useLocation, Location, Link } from 'react-router-dom'
import { FcList } from 'react-icons/fc'
import { GrClose } from 'react-icons/gr'
import HeaderDropdown from './HeaderDropdown'

type MenuItem = {
  name: string
  to: string
}

var MenuLink = ({ lable, to, location }: { lable: string; to: string; location: Location }) => {
  const match = location.pathname === to
  return (
    <li>
      <Link to={to} className={clsx({ [Components.active]: match })}>
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
  console.log('renderheader')

  //Nut  toggle
  // const wrapperRef = useRef() as MutableRefObject<HTMLUListElement>

  const [currencyToggle, setCurrencyToggle] = useState(false)
  const menuRight = useRef() as MutableRefObject<HTMLElement>
  const menuRightCloseBtn = useRef() as MutableRefObject<HTMLElement>
  const [languageToggle, setLanguageToggle] = useState(false)

  const [showModile, setShowModile] = useState(false)

  return (
    <header id="header" className={clsx(Styles.header)}>
      <div className={clsx(Styles.container)}>
        <div className={Styles.logo}>
          <Link to="/">
            <img alt="Logo" src={logo}></img>
          </Link>
        </div>
        <nav
          id="navbar"
          className={clsx(Styles.navbar, { [Styles.navbarMobile]: showModile })}
          ref={menuRight}
        >
          <ul>{showMenu(t('components.header._menus', { returnObjects: true }), location)}</ul>
          <i className={Styles.close} onClick={() => setShowModile(!showModile)}>
            {showModile && <GrClose></GrClose>}
          </i>
        </nav>
        <nav
          id="navbar"
          className={clsx({ [Styles.navbar]: !showModile, [Styles.userMenu]: showModile })}
          ref={menuRight}
        >
          <ul>
            <li>
              <a>
                USD
                <span>
                  <i aria-hidden="true" />
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
              <button className={Styles.buttonAccount}>Tài khoản</button>
            </li>
          </ul>
          <i className={Styles.toggleNavigation} onClick={() => setShowModile(!showModile)}>
            {!showModile && <FcList></FcList>}
          </i>
        </nav>
      </div>
      <HeaderDropdown></HeaderDropdown>
    </header>
  )
}

export default memo(Header)
