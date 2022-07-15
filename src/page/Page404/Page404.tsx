/* eslint-disable @next/next/no-img-element */
import notfound from '@/assets/image/error_404.svg'
import { Metadata } from '@/components'
import Styles from '@/styles/page/Page404.module.scss'
import { Link } from 'react-router-dom'

function Page404(): JSX.Element {
  return (
    <>
      <Metadata title="Khóa học - Ms.Quynh" description="Khóa học - Ms.Quynh" />
      <div className={Styles.page404}>
        <img src={notfound} alt="notfound" className={Styles.img404} />
        <div className={Styles.boxNotice}>
          <p className={Styles.notice}>Oops! This Page is Not Found.</p>
          <Link to={'/'}>
            <div className={Styles.buttonGoHome}>Back to home</div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Page404
