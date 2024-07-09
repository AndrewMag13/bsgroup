'use client'
import { useTranslations } from 'next-intl'
import s from './planCard.module.scss'
import cn from 'classnames'
import { AnimatePresence, motion } from 'framer-motion'
interface ITitleProps {
  title: string
  direction: string
}
const PlanCard = (props: ITitleProps) => {
  const t = useTranslations('home.development')
  return (
    <>
      <motion.div
        className={s.container}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        initial={{
          opacity: 0,
          x:
            props.direction === 'down' || props.direction === 'right'
              ? -50
              : 50,
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
        <div
          className={s.card}
          style={{
            zIndex: 10,
          }}
        >
          {t(`${props.title}`)}
        </div>
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
                delay: 0.1,
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
                delay: 0.2,
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
                delay: 0.3,
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
      </motion.div>
    </>
  )
}

export default PlanCard
