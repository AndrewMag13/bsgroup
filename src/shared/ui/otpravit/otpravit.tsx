import { useTranslations } from 'next-intl'
import s from './otpravit.module.scss'
const OtpravitButton = () => {
  const t = useTranslations('home.ui')
  return (
    <>
      <button className={s.button}>{t('contactButton')}</button>
    </>
  )
}

export default OtpravitButton
