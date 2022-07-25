/* eslint-disable @next/next/no-img-element */
import logo from '@/assets/image/logo.png'
import React, { useEffect, useState } from 'react'
import { useDetectClickOutside } from 'react-detect-click-outside'
import { useTranslation } from 'react-i18next'
import { GoSearch } from 'react-icons/go'
import { IoChevronDownOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import Styles from './Header.module.scss'
import { HomeMenu, MemberMenu, ProjectResearchMenu, ResourceMenu } from './Menu'

const Header = (): JSX.Element => {
  const { t, i18n } = useTranslation()
  const [bodyMenu, setBodyMenu] = useState<JSX.Element>()
  const [activeId, setActiveId] = useState<string>()
  const ref = useDetectClickOutside({
    onTriggered: () => {
      handleBodyMenu('', undefined)
    }
  })

  // this have menu for each nav link
  const navLinks = [
    {
      id: 'link_1',
      name: t('header.home'),
      menu: undefined
    },
    {
      id: 'link_2',
      name: t('header.members'),
      menu: <MemberMenu />
    },
    {
      id: 'link_3',
      name: t('header.resources'),
      menu: <ResourceMenu />
    },
    {
      id: 'link_4',
      name: t('header.projectResearch'),
      menu: <ProjectResearchMenu />
    }
  ]

  // change language
  const handleChangeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    i18n.changeLanguage(event.target.value.toString().toLowerCase())
    handleBodyMenu('', undefined)
  }

  // use this variable to made animation menu slide
  document.documentElement.style.setProperty('--max-HeightListBar', `${50}vh`)

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
    <div className={Styles.header} ref={ref}>
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
        <div className={`${Styles.lang}`}>
          <select name="lang" id="lang" onChange={(e) => handleChangeLanguage(e)}>
            <option>{t('header.language')}</option>
            <option value="en">EN</option>
            <option value="vi">VI</option>
          </select>
        </div>
      </div>
      <div className={Styles.searchBar}>
        <GoSearch />
        <input type="text" placeholder="Tìm kiếm" />
      </div>
      <div className={Styles.btnSignInUp}>
        <Link to={'/login'} className={Styles.btnSignIn}>
          <p>{t('header.login')}</p>
        </Link>

        <Link to={'/register'} className={Styles.btnSignUp}>
          <p>{t('header.register')}</p>
        </Link>
      </div>
      <div className={`${Styles.menuBox} ${bodyMenu && Styles.activeMenu} `}>{bodyMenu}</div>
    </div>
  )
}

export default Header
