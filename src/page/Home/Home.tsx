import React from 'react'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom'

export default function Home(): JSX.Element {
  const { t, i18n  } = useTranslation()
  return (
    <section >Home
      {/* {t('content.functional')}
      <div style={{marginTop: "500px"}}>
        <Link to="/team"> aaa</Link>
                ...
                <button onClick={() => i18n.changeLanguage('de')}>de</button>
                <button onClick={() => i18n.changeLanguage('en')}>en</button>
            </div> */}
    </section>
  )
}
