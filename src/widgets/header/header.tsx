'use client'

import Image from 'next/image'
import LangSelector from '@/shared/ui/langSelector/langSelector'
import { Link } from '@/navigation'
import { motion } from 'framer-motion'
import s from './header.module.scss'
import { useTranslations } from 'next-intl'

const Header = () => {
  const t = useTranslations('home')
  return (
    <>
      <motion.header
        className={s.header}
        initial={{
          opacity: 0,
          y: -50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
          },
        }}
        viewport={{ once: true }}
      >
        <motion.div
          className={s.header__logo}
          whileTap={{ scale: 0.96 }}
          whileHover={{ scale: 1.06 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <Link href={'/#mainblock'}>
            <Image
              src={`/icons/bsHeader.svg`}
              alt="BSGROUP icon"
              width={98}
              height={33}
              priority
            />
          </Link>
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.96 }}
          whileHover={{ scale: 1.06 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <Link href={`tel:${t(`ui.phoneNumber`)}`} className={s.phone}>
            <Image
              src={`/icons/phone.svg`}
              alt="BSGROUP icon"
              width={20}
              height={20}
              className={s.phone_icon}
            />
            <span className={s.number}>{t(`ui.phoneNumber`)}</span>
          </Link>
        </motion.div>
        <LangSelector />
      </motion.header>
    </>
  )
}

export default Header
