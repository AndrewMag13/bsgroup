'use client'

import { motion } from 'framer-motion'
import s from './techCard.module.scss'
import { useTranslations } from 'next-intl'

interface ITechCard {
  title: string
}
const TechCard = (props: ITechCard) => {
  const t = useTranslations('home.techs')
  return (
    <>
      <motion.div
        className={s.container}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        initial={{
          opacity: 0,
          y: 100,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}
      >
        <div className={s.title}>{t(`${props.title}`)}</div>
      </motion.div>
    </>
  )
}

export default TechCard
