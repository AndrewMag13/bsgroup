'use client'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import { useState } from 'react'
import s from './navButton.module.scss'
import Image from 'next/image'
import Link from 'next/link'
import { useTranslations } from 'next-intl'
const NavButton = () => {
  const itemVariants: Variants = {
    open: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 300, damping: 24 },
    },
    closed: { opacity: 0, y: 20, transition: { duration: 0.2 } },
  }
  const [isOpen, setIsOpen] = useState(false)
  const t = useTranslations('home.header')
  const opts = ['services', 'development', 'projects', 'techs', 'application']
  return (
    <>
      <AnimatePresence>
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
              src={'/icons/headerMenu.svg'}
              alt="navigation icons"
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
            style={{
              pointerEvents: isOpen ? 'auto' : 'none',
            }}
          >
            <ul className={s.ulist}>
              {opts.map((opt) => {
                return (
                  <motion.li
                    key={opt}
                    variants={itemVariants}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                  >
                    <Link href={`/${t(`links.${opt}.href`)}`}>
                      {t(`links.${opt}.title`)}
                    </Link>
                  </motion.li>
                )
              })}
            </ul>
          </motion.ul>
        </motion.nav>
      </AnimatePresence>
    </>
  )
}

export default NavButton
