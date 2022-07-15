/* eslint-disable @next/next/no-img-element */
import Logo from '@/assets/image/logo.png'
import Styles from '@/components/Footer/Footer.module.scss'
import { IoCallOutline } from 'react-icons/io5'
import { MdOutlineMailOutline } from 'react-icons/md'
import { Link } from 'react-router-dom'
import IcFacebook from '../../assets/icon/icfacebook.svg'
import { Icon } from '../HPComponents'

function Footer(): JSX.Element {
  return (
    <div className={Styles.footer}>
      <div className={Styles.footerContent}>
        <div className={Styles.teamContact}>
          <div className={Styles.logo}>
            <img src={Logo} alt="Logo" />
          </div>
          <div className={Styles.followUs}>
            <p>Follow us on: </p>
            <div className={Styles.groupIcon}>
              <Icon image={IcFacebook} size={30} />
            </div>
          </div>
          <div className={Styles.contactBy}>
            <p className={Styles.itemContact}>
              <IoCallOutline />
              +1-800-540-1086
            </p>
            <p className={Styles.itemContact}>
              <MdOutlineMailOutline /> ftisu@gm.uit.edu.vn
            </p>
          </div>
        </div>
        <div className={Styles.groupLinks}>
          <div className={Styles.title}>
            <p className={Styles.titleLink}>Top Websites</p>
            <p className={Styles.titleLink}>Top Android Apps</p>
            <p className={Styles.titleLink}>Top iOS</p>
            <p className={Styles.titleLink}>Apps Digital 100 DigitalRank</p>
            <p className={Styles.titleLink}>API Top Browsers</p>
          </div>
          <div className={Styles.content}>
            <div className={Styles.itemLink}>
              <Link to={'/'}>Top Websites</Link>
              <Link to={'/'}>Top Android Apps</Link>
              <Link to={'/'}>Top iOS</Link>
              <Link to={'/'}>Apps Digital 100 DigitalRank</Link>
              <Link to={'/'}>API Top Browsers</Link>
              <Link to={'/'}>Top Search Engines</Link>
              <Link to={'/'}>Mobile vs. Desktop Data</Link>
              <Link to={'/'}>Our Data Verify</Link>
              <Link to={'/'}>Your Website</Link>
              <Link to={'/'}>Browser Extension</Link>
              <Link to={'/'}>Privacy and Security</Link>
            </div>{' '}
            <div className={Styles.itemLink}>
              <Link to={'/'}>Top Websites</Link>
              <Link to={'/'}>Top Android Apps</Link>
              <Link to={'/'}>Top iOS</Link>
              <Link to={'/'}>Apps Digital 100 DigitalRank</Link>
              <Link to={'/'}>API Top Browsers</Link>
              <Link to={'/'}>Top Search Engines</Link>
              <Link to={'/'}>Mobile vs. Desktop Data</Link>
              <Link to={'/'}>Our Data Verify</Link>
              <Link to={'/'}>Your Website</Link>
              <Link to={'/'}>Browser Extension</Link>
              <Link to={'/'}>Privacy and Security</Link>
            </div>{' '}
            <div className={Styles.itemLink}>
              <a href="/">Top Websites</a>
              <Link to={'/'}>Top Android Apps</Link>
              <Link to={'/'}>Top iOS</Link>
              <Link to={'/'}>Apps Digital 100 DigitalRank</Link>
              <Link to={'/'}>API Top Browsers</Link>
              <Link to={'/'}>Top Search Engines</Link>
              <Link to={'/'}>Mobile vs. Desktop Data</Link>
              <Link to={'/'}>Our Data Verify</Link>
              <Link to={'/'}>Your Website</Link>
              <Link to={'/'}>Browser Extension</Link>
              <Link to={'/'}>Privacy and Security</Link>
            </div>
            <div className={Styles.itemLink}>
              <Link to={'/'}>Top Websites</Link>
              <Link to={'/'}>Top Android Apps</Link>
              <Link to={'/'}>Top iOS</Link>
              <Link to={'/'}>Apps Digital 100 DigitalRank</Link>
              <Link to={'/'}>API Top Browsers</Link>
              <Link to={'/'}>Top Search Engines</Link>
              <Link to={'/'}>Mobile vs. Desktop Data</Link>
              <Link to={'/'}>Our Data Verify</Link>
              <Link to={'/'}>Your Website</Link>
              <Link to={'/'}>Browser Extension</Link>
              <Link to={'/'}>Privacy and Security</Link>
            </div>
            <div className={Styles.itemLink}>
              <Link to={'/'}>Top Websites</Link>
              <Link to={'/'}>Top Android Apps</Link>
              <Link to={'/'}>Top iOS</Link>
              <Link to={'/'}>Apps Digital 100 DigitalRank</Link>
              <Link to={'/'}>API Top Browsers</Link>
              <Link to={'/'}>Top Search Engines</Link>
              <Link to={'/'}>Mobile vs. Desktop Data</Link>
              <Link to={'/'}>Our Data Verify</Link>
              <Link to={'/'}>Your Website</Link>
              <Link to={'/'}>Browser Extension</Link>
              <Link to={'/'}>Privacy and Security</Link>
            </div>
          </div>
        </div>
      </div>
      <div className={Styles.license}>
        <p>© FTISU 2022 All Rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
