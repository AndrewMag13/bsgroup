'use client'
import s from './header.module.scss'
import { Link } from '@/navigation'
import Image from 'next/image'
import { useTranslations } from 'next-intl'
import LangSelector from '@/shared/ui/langSelector/langSelector'
import { motion } from 'framer-motion'
const Header = () => {
  const t = useTranslations('home.header')
  const headerKeys = [
    'services',
    'development',
    'projects',
    'techs',
    'application',
  ]
  return (
    <>
      <circle
        dangerouslySetInnerHTML={{ __html: '<!--silly easter egg)))-->' }}
      ></circle>
      <motion.div
        className={s.header}
        initial={{
          opacity: 0,
          y: -50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
          },
        }}
        viewport={{ once: true }}
      >
        <motion.span
          className={s.header__logo}
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <Link href={'/#mainblock'}>
            <Image
              src={`/icons/bsHeader.svg`}
              alt="bs icon"
              width={98}
              height={33}
            />
          </Link>
        </motion.span>
        <div className={s.header__links}>
          <ul className={s.header__links__list}>
            {headerKeys.map((headerKey) => {
              return (
                <motion.li
                  className={s.header__links__element}
                  key={headerKey}
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: 'spring', stiffness: 200, damping: 20 }}
                >
                  <Link href={`/${t(`links.${headerKey}.href`)}`}>
                    {t(`links.${headerKey}.title`)}
                  </Link>
                </motion.li>
              )
            })}
          </ul>
        </div>
        <div className={s.lang}>
          <LangSelector />
        </div>
      </motion.div>
    </>
  )
}

export default Header
