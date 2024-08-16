'use client'

import Image from 'next/image'
import Link from 'next/link'
import { NextPage } from 'next'
import { getIntlKeys } from '@/shared/functions/getIntlKeys'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const Icons: NextPage = () => {
  const t = useTranslations('home.footer')
  const arr = getIntlKeys(t, 'iconsLinks')
  return (
    <>
      {arr.map((icon) => {
        return (
          <motion.div
            key={icon}
            whileTap={{ scale: 0.96 }}
            whileHover={{ scale: 1.06 }}
            transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          >
            <Link href={t(`iconsLinks.${icon}`)}>
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
