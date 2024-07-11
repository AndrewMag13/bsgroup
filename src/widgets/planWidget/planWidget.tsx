'use client'
import { useTranslations } from 'next-intl'
import s from './planWidget.module.scss'
import PlanCard from '@/shared/ui/planCard/planCard'
import { motion } from 'framer-motion'
const PlanWidget = () => {
  const t = useTranslations('home.development')
  const keys1 = ['step1', 'step2', 'step3']
  const key4 = 'step4'
  const keys2 = ['step6', 'step7', 'step8']
  const key5 = 'step5'

  return (
    <>
      <div className={s.container} id="development">
        <div className={s.title}>{t('title')}</div>
        <div className={s.cards}>
          {keys1.map((key1) => {
            return (
              <motion.div
                key={key1}
                className={s.card}
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
                <PlanCard title={key1} direction="down" />
              </motion.div>
            )
          })}
          <motion.div
            className={s.card}
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
            <PlanCard title={key4} direction="right" />
          </motion.div>
          {keys2.reverse().map((key2) => {
            return (
              <motion.div
                key={key2}
                className={s.card}
                initial={{
                  opacity: 0,
                  x: 50,
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
                <PlanCard title={key2} direction="up" />
              </motion.div>
            )
          })}
          <motion.div
            className={s.card}
            initial={{
              opacity: 0,
              x: 50,
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
            <PlanCard title={key5} direction="none" />
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default PlanWidget
