import { useTranslations } from 'next-intl'
import s from './otpravit.module.scss'
import { motion } from 'framer-motion'
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
