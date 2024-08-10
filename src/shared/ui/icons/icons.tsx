'use client'

import Image from 'next/image'
import Link from 'next/link'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const Icons: NextPage = () => {
  const t = useTranslations('home.footer.iconsLinks')
  const icons = ['telegram', 'taplink', 'behance', 'inst', 'youtube', 'github']
  return (
    <>
      {icons.map((icon) => {
        return (
          <motion.div
            key={icon}
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.06 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <Link href={t(icon)}>
              <Image
                src={`/footer/${icon}.svg`}
                width={24}
                height={24}
                alt={`icon of ${icon}`}
              />
            </Link>
          </motion.div>
        )
      })}
    </>
  )
}

export default Icons
