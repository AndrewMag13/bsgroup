'use client'

import Napisat from '@/shared/ui/napisat/napisat'
import Parallax from '@/shared/ui/parallax/parallax'
import TypeWrote from '@/shared/ui/typeWrote/typeWrote'
import { motion } from 'framer-motion'
import s from './mainblock.module.scss'
import { useTranslations } from 'next-intl'

const MainBlockPage = () => {
  const t = useTranslations('home.mainBlock')
  return (
    <>
      <section className={s.main} id="main">
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
          <h3 className={s.smalltext}>{t('smallText')}</h3>
          <Napisat />
        </motion.div>
      </section>
    </>
  )
}

export default MainBlockPage
