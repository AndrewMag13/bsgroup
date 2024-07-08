import { Fragment } from 'react'
import s from './textLen.module.scss'
import { useTranslations } from 'next-intl'

const TextLen = () => {
  const t = useTranslations('home.textLen')
  const keys = [
    'market analysis',
    'adaptation',
    'audit',
    'projection',
    'SEO',
    'integration',
    'design',
    'redesign',
    'prototype',
    'UI/UX',
    'content management',
    'animation',
    'motion design',
    'deployment',
    'optimization',
    'maintenance',
    'promotion',
    'support',
  ]
  return (
    <>
      <div className={s.wrapper}>
        <div className={s.text}>
          <ul className={s.list}>
            {keys.map((key) => {
              return (
                <Fragment key={key}>
                  <li className={s.title}>{t(`${key}`)}</li>
                  <li className={s.dot}>·</li>
                </Fragment>
              )
            })}
          </ul>
          <ul className={` ${s.list} ${s.list2}`}>
            {keys.map((key) => {
              return (
                <Fragment key={key}>
                  <li className={s.title}>{t(`${key}`)}</li>
                  <li className={s.dot}>·</li>
                </Fragment>
              )
            })}
          </ul>
          <ul className={` ${s.list} ${s.list3}`}>
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
