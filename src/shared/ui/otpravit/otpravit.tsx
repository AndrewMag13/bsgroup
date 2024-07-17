import { motion } from 'framer-motion'
import s from './otpravit.module.scss'
import { useTranslations } from 'next-intl'

const OtpravitButton = () => {
  const t = useTranslations('home.ui')
  return (
    <>
      <motion.button
        className={s.button}
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        {t('contactButton')}
      </motion.button>
    </>
  )
}

export default OtpravitButton
