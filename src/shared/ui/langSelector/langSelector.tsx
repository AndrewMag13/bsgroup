'use client'
import { NextPage } from 'next'
import Image from 'next/image'
import s from './langSelector.module.scss'
import { APP_URL } from '@/shared/constants/constants'
import { useOutside } from '@/shared/hooks/useOutside'
import cn from 'classnames'
import Link from 'next/link'
import { Variants, motion } from 'framer-motion'
import { useState } from 'react'
const LangSelector: NextPage = () => {
  const langs = [
    { id: 1, short: 'en', lang: 'English' },
    { id: 2, short: 'ru', lang: 'Русский' },
  ]
  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  }
  const { ref, isShow, setIsShow } = useOutside(false)
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
        >
          <Image
            src={`/icons/lang.svg`}
            alt="language selector"
            width={30}
            height={30}
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
              <motion.li key={lang.id} variants={itemVariants}>
                <Link href={`/${lang.short}`}>{lang.lang}</Link>
              </motion.li>
            )
          })}
        </motion.ul>
      </motion.nav>
    </>
  )
}

export default LangSelector
