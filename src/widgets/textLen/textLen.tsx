'use client'
import { Fragment } from 'react'
import s from './textLen.module.scss'
import { useTranslations } from 'next-intl'
import { motion } from 'framer-motion'
const TextLen = () => {
  const t = useTranslations('home.textLen')
  const keys = [
    'market analysis',
    'adaptation',
    'audit',
    'accessibility',
    'scalability',
    'projection',
    'SEO',
    'SMI',
    'metrics',
    'integration',
    'documentation',
    'design',
    'redesign',
    'prototype',
    'wireframing',
    'UI/UX',
    'E2E',
    'coffee preparing',
    'content management',
    'content strategy',
    'setting',
    'animation',
    'motion design',
    'marketing',
    'testing',
    'deployment',
    'hosting',
    'coffee consumption',
    'optimization',
    'maintenance',
    'promotion',
    'support',
  ]
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.text}>
          <motion.ul
            className={s.list}
            initial={{
              opacity: 0,
              x: 100,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              transition: {
                duration: 1,
              },
            }}
            viewport={{ once: true }}
          >
            {keys.map((key) => {
              return (
                <Fragment key={key}>
                  <li className={s.title}>{t(`${key}`)}</li>
                  <li className={s.dot}>·</li>
                </Fragment>
              )
            })}
          </motion.ul>
          <ul className={`${s.list} ${s.list2}`}>
            {keys.map((key) => {
              return (
                <Fragment key={key}>
                  <li className={s.title}>{t(`${key}`)}</li>
                  <li className={s.dot}>·</li>
                </Fragment>
              )
            })}
          </ul>
        </div>
      </div>
    </>
  )
}

export default TextLen
