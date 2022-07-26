/* eslint-disable @next/next/no-img-element */
import logo from '@/assets/image/logo.png'
import React, { useEffect, useState } from 'react'
import { useDetectClickOutside } from 'react-detect-click-outside'
import { useTranslation } from 'react-i18next'
import { GoSearch } from 'react-icons/go'
import { IoChevronDownOutline } from 'react-icons/io5'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Styles from './Header.module.scss'
import { HomeMenu, MemberMenu, ProjectResearchMenu, ResourceMenu } from './Menu'

const Header = (): JSX.Element => {
  const { t, i18n } = useTranslation()
  const [bodyMenu, setBodyMenu] = useState<JSX.Element>()
  const [activeId, setActiveId] = useState<string>()
  const [openSearch, setOpenSearch] = useState<boolean>(false)
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
      menu: <ResourceMenu />
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
  const handleChangeLanguage = (lang: string) => {
    i18n.changeLanguage(lang.toString().toLowerCase())
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

  // handle open search bar
  const handleOpenSearch = (flag: boolean) => {
    setOpenSearch(flag)
  }

  return (
    <>
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
          <div
            className={`${Styles.lang} ${'lang' === activeId && Styles.active}`}
            onClick={() => handleBodyMenu('lang', undefined)}
          >
            <p>{t('header.language')}</p>{' '}
            <IoChevronDownOutline
              size={12}
              className={'lang' === activeId ? Styles.activeChevron : ''}
            />
            <ul className={'lang' === activeId ? Styles.activeLang : ''}>
              <li onClick={() => handleChangeLanguage('vi')}>VI</li>
              <li onClick={() => handleChangeLanguage('en')}>EN</li>
            </ul>
          </div>
        </div>
        <div className={Styles.searchBar} onClick={() => handleOpenSearch(true)}>
          <GoSearch />
          <p>{t('header.search')}</p>
        </div>
        <div className={Styles.btnSignInUp}>
          <Link to={'/login'} className={Styles.btnSignIn}>
            <p>{t('header.login')}</p>
          </Link>

          <Link to={'/register'} className={Styles.btnSignUp}>
            <p>{t('header.register')}</p>
          </Link>
        </div>
        <div className={Styles.iconBars}>
          <FaBars />
        </div>
        <div className={`${Styles.menuBox} ${bodyMenu && Styles.activeMenu} `}>{bodyMenu}</div>
      </div>
      {openSearch && (
        <div className={Styles.searchBox}>
          <div className={Styles.overlaySearch} onClick={() => handleOpenSearch(false)}></div>
          <div className={Styles.search}>
            <div className={Styles.searchTitle}>{t('header.search')}</div>
            <div className={Styles.inputSearch}>
              <GoSearch />
              <input type="text" placeholder="Analyze any website or app" />
              <p className={Styles.btnSearch}>{t('header.search')}</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header
