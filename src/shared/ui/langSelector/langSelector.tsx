'use client'

import { AnimatePresence, Variants, motion } from 'framer-motion'

import Image from 'next/image'
import { Link } from '@/navigation'
import { NextPage } from 'next'
import s from './langSelector.module.scss'
import { useState } from 'react'

const LangSelector: NextPage = () => {
  const langs = [
    { short: 'en', lang: 'English' },
    { short: 'ru', lang: 'Русский' },
  ]
  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  }
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <AnimatePresence>
        <motion.nav
          initial={false}
          animate={isOpen ? 'open' : 'closed'}
          className={s.common}
          style={{
            zIndex: 30,
          }}
        >
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.06 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
            className={s.button}
          >
            <Image
              src={`/icons/lang.svg`}
              alt="language selector"
              width={30}
              height={30}
              className={s.logo}
            />
          </motion.button>
          <motion.div
            className={s.selector}
            variants={{
              open: {
                clipPath: 'inset(0% 0% 0% 0% round 10px)',
                overflow: 'hidden',
                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 0.7,
                  delayChildren: 0.3,
                  staggerChildren: 0.05,
                },
              },
              closed: {
                clipPath: 'inset(10% 50% 90% 50% round 10px)',
                overflow: 'hidden',

                transition: {
                  type: 'spring',
                  bounce: 0,
                  duration: 0.3,
                },
              },
            }}
            style={{
              pointerEvents: isOpen ? 'auto' : 'none',
            }}
          >
              <ul className={s.uli}>
                {langs.map((lang) => {
                  return (
                    <motion.li
                      key={lang.short}
                      variants={itemVariants}
                      whileTap={{ scale: 0.96 }}
                      whileHover={{ scale: 1.06 }}
                      transition={{
                        type: 'spring',
                        stiffness: 200,
                        damping: 20,
                      }}
                    >
                      <Link href={`/`} scroll={false} locale={`${lang.short}`}>
                        {lang.lang}
                      </Link>
                    </motion.li>
                  )
                })}
              </ul>
          </motion.div>
        </motion.nav>
      </AnimatePresence>
    </>
  )
}

export default LangSelector
