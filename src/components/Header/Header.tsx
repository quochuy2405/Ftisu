/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { IoChevronDownOutline } from 'react-icons/io5'
import { NavLink, useLocation } from 'react-router-dom'
import Styles from './Header.module.scss'
import HomeMenu from './Menu/HomeMenu'
import logo from '@/assets/image/logo.png'
const navLinks = [
  {
    name: 'Trang chủ',
    link: '/',
    menu: <HomeMenu />
  },
  {
    name: 'Thành viên',
    link: '/admin/2',
    menu: <HomeMenu />
  },
  {
    name: 'Liên hệ',
    link: '/2',
    menu: <HomeMenu />
  },
  {
    name: 'Tiếng việt',
    link: '/3',
    menu: <HomeMenu />
  },
  {
    name: 'USD',
    link: '/4',
    menu: undefined
  }
]
const Header = (): JSX.Element => {
  const [bodyMenu, setBodyMenu] = useState<JSX.Element>()
  const router = useLocation()

  // use this variable to made animation menu slide
  document.documentElement.style.setProperty('--max-HeightListBar', `${45}vh`)

  // handle for menu slide and change data in card
  const handleBodyMenu = (link: string, menu: JSX.Element | undefined) => {
    if (router.pathname === link) {
      setBodyMenu(bodyMenu ? undefined : menu)
    } else {
      if (bodyMenu) setBodyMenu(menu)
    }
  }

  return (
    <div className={Styles.header}>
      <div className={Styles.logo}>
        <img src={logo} alt="logo" />
      </div>

      <div className={Styles.navLinks}>
        {navLinks?.map((item) => (
          <NavLink
            to={item?.link}
            key={item.name}
            className={({ isActive }) => (isActive ? Styles.activeLink : Styles.unActiveLink)}
            onClick={() => handleBodyMenu(item.link, item?.menu)}
          >
            <p>{item.name}</p>
            {item.menu && (
              <IoChevronDownOutline
                className={router.pathname === item.link && bodyMenu ? Styles.activeChevron : ''}
              />
            )}
          </NavLink>
        ))}
      </div>
      <div className={Styles.searchBar}>
        <GoSearch />
        <input type="text" placeholder="Tìm kiếm" />
      </div>
      <div className={Styles.btnSignInUp}>
        <div className={Styles.btnSignIn}>
          <p>Đăng nhập</p>
        </div>
        <div className={Styles.btnSignUp}>
          <p>Đăng ký</p>
        </div>
      </div>
      <div className={`${Styles.menuBox} ${bodyMenu && Styles.activeMenu} `}>{bodyMenu}</div>
    </div>
  )
}

export default Header
