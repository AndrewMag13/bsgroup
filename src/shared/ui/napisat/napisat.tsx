'use client'

import { Button } from '@/stories/Napisat'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

const Napisat = () => {
  const t = useTranslations('home.ui')
  return (
    <>
      <Link href="https://t.me/bsgroupp" style={{ zIndex: 10, width: '140px' }}>
        <Button
          label={t('napisatButton')}
          primary
          style={{ zIndex: 10 }}
        ></Button>
      </Link>
    </>
  )
}

export default Napisat
