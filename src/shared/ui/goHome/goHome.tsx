'use client'

import { Link } from '@/navigation'
import { NextPage } from 'next'
import { useTranslations } from 'next-intl'

const GoHome: NextPage = () => {
  const t = useTranslations('home.ui')
  return (
    <>
      <div
        style={{
          fontWeight: '700',
          marginTop: '3.75rem',
          fontSize: '2rem',
        }}
      >
        <Link href="/">{t('link')}</Link>
      </div>
    </>
  )
}

export default GoHome
