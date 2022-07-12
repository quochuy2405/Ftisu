import React from 'react'
import { useTranslation } from 'react-i18next';

export default function Home() {
  const { t, i18n  } = useTranslation()
  return (
    <section>Home
      {t('content.functional')}
      <div>
                ...
                <button onClick={() => i18n.changeLanguage('de')}>de</button>
                <button onClick={() => i18n.changeLanguage('en')}>en</button>
            </div>
    </section>
  )
}
