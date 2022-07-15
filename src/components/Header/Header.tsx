/* eslint-disable @next/next/no-img-element */
import logo from '@/assets/image/logo.png'
import { useState } from 'react'
import { GoSearch } from 'react-icons/go'
import { IoChevronDownOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Styles from './Header.module.scss'
import HomeMenu from './Menu/HomeMenu'

// this have menu for each nav link
const navLinks = [
  {
    id: 'link_1',
    name: 'Trang chủ',
    menu: <HomeMenu />
  },
  {
    id: 'link_2',
    name: 'Thành viên',
    menu: <HomeMenu />
  },
  {
    id: 'link_3',
    name: 'Liên hệ',
    menu: <HomeMenu />
  },
  {
    id: 'link_4',
    name: 'Tiếng việt',
    menu: <HomeMenu />
  },
  {
    id: 'link_5',
    name: 'USD',
    menu: undefined
  }
]

const Header = (): JSX.Element => {
  const [bodyMenu, setBodyMenu] = useState<JSX.Element>()
  const [activeId, setActiveId] = useState<string>()

  // use this variable to made animation menu slide
  document.documentElement.style.setProperty('--max-HeightListBar', `${45}vh`)

  // handle for menu slide and change data in card
  const handleBodyMenu = (id: string, menu: JSX.Element | undefined) => {
    if (id === activeId) {
      setBodyMenu(bodyMenu ? undefined : menu)
      setActiveId('')
    } else {
      setBodyMenu(menu)
      setActiveId(id)
    }
  }

  return (
    <div className={Styles.header}>
      <div className={Styles.logo}>
        <img src={logo} alt="logo" />
      </div>
      <div className={Styles.navLinks}>
        {navLinks?.map((item) => (
          <div
            key={item?.id}
            className={`${Styles.navLink} ${item?.id === activeId && Styles.activeLink}`}
            onClick={() => handleBodyMenu(item?.id, item?.menu)}
          >
            <p>{item?.name}</p>
            {item?.menu && (
              <IoChevronDownOutline
                size={12}
                className={item?.id === activeId ? Styles.activeChevron : ''}
              />
            )}
          </div>
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
        <Link to={'/register'} className={Styles.btnSignUp}>
          <p>Đăng ký</p>
        </Link>
      </div>
      <div className={`${Styles.menuBox} ${bodyMenu && Styles.activeMenu} `}>{bodyMenu}</div>
    </div>
  )
}

export default Header
