'use client'
import { NextPage } from 'next'
import { useTranslations } from 'next-intl'
import { Link } from '@/navigation'

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
