import Styles from '@/styles/page/Home.module.scss'
import { useTranslation } from 'react-i18next'

const Home = (): JSX.Element => {
  const { t } = useTranslation()
  return <div className={Styles.home}>{t('login.description')}</div>
}

export default Home
