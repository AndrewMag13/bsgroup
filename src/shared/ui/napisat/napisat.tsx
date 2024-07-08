'use client'
import { Button } from '@/stories/Napisat'
import { useTranslations } from 'next-intl'

const Napisat = () => {
  const t = useTranslations('home.ui')
  return (
    <>
      <Button
        label={t('napisatButton')}
        primary
        style={{ zIndex: 10 }}
      ></Button>
    </>
  )
}

export default Napisat
