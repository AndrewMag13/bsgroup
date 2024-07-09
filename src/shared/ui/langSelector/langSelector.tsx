'use client'
import { NextPage } from 'next'
import Image from 'next/image'
import s from './langSelector.module.scss'
import { Link } from '@/navigation'
import { Variants, motion } from 'framer-motion'
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
      <motion.nav
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        className={s.common}
      >
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.1 }}
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
        <motion.ul
          className={s.selector}
          variants={{
            open: {
              clipPath: 'inset(0% 0% 0% 0% round 10px)',
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
              transition: {
                type: 'spring',
                bounce: 0,
                duration: 0.3,
              },
            },
          }}
          style={{ pointerEvents: isOpen ? 'auto' : 'none' }}
        >
          {langs.map((lang) => {
            return (
              <motion.li
                key={lang.short}
                variants={itemVariants}
                whileTap={{ scale: 0.95 }}
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 20 }}
              >
                <Link href={`/`} scroll={false} locale={`${lang.short}`}>
                  {lang.lang}
                </Link>
              </motion.li>
            )
          })}
        </motion.ul>
      </motion.nav>
    </>
  )
}

export default LangSelector