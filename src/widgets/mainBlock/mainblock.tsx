'use client'
import Parallax from '@/shared/ui/parallax/parallax'
import s from './mainblock.module.scss'
import Napisat from '@/shared/ui/napisat/napisat'
import TypeWrote from '@/shared/ui/typeWrote/typeWrote'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
const MainBlockPage = () => {
  const t = useTranslations('home.mainBlock')
  return (
    <>
      <div className={s.main} id="main">
        <Parallax />
        <motion.div
          className={s.text}
          initial={{
            opacity: 0,
            x: -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          style={{
            zIndex: 10,
          }}
          viewport={{ once: true }}
        >
          <h1 className={s.title}>
            {t('headerFirst')}
            <b>
              <TypeWrote />
            </b>
            {t('headerSecond')}
          </h1>
          <div className={s.smalltext}>{t('smallText')}</div>
          <Napisat />
        </motion.div>
      </div>
    </>
  )
}

export default MainBlockPage
