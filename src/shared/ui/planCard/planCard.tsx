'use client'

import cn from 'classnames'
import { motion } from 'framer-motion'
import s from './planCard.module.scss'
import { useTranslations } from 'next-intl'

interface ITitleProps {
  title: string
  direction: string
}
const PlanCard = (props: ITitleProps) => {
  const t = useTranslations('home.development')
  return (
    <>
      <div className={s.container}>
        <motion.div
          className={s.card}
          style={{
            zIndex: 10,
          }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          {t(`${props.title}`)}
        </motion.div>
        {props.direction === 'down' ? (
          <motion.div
            className={cn([s.border], [s.down])}
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.3,
                duration: 1,
              },
            }}
            style={{
              zIndex: 1,
            }}
            viewport={{ once: true }}
          ></motion.div>
        ) : props.direction === 'right' ? (
          <motion.div
            className={cn([s.border], [s.right])}
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                delay: 0.6,
                duration: 1,
              },
            }}
            style={{
              zIndex: 1,
            }}
            viewport={{ once: true }}
          ></motion.div>
        ) : props.direction === 'up' ? (
          <motion.div
            className={cn([s.border], [s.up])}
            initial={{
              opacity: 0,
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                delay: 1,
                duration: 1,
              },
            }}
            style={{
              zIndex: 1,
            }}
            viewport={{ once: true }}
          ></motion.div>
        ) : (
          <motion.div
            className={cn([s.border], [s.none])}
            viewport={{ once: true }}
            style={{
              zIndex: 1,
            }}
          ></motion.div>
        )}
      </div>
    </>
  )
}

export default PlanCard
