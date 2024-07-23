'use client'

import { Link } from '@/navigation'
import { NextPage } from 'next'
import { motion } from 'framer-motion'
import { useTranslations } from 'next-intl'

const GoHome: NextPage = () => {
  const t = useTranslations('home.ui')
  return (
    <>
      <Link
        href="/"
        style={{
          marginTop: '3.75rem',
        }}
      >
        <motion.div
          whileTap={{ scale: 0.96 }}
          whileHover={{ scale: 1.06 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          style={{
            fontWeight: '700',

            fontSize: '2rem',
            backgroundColor: '#161616',
            width: '200px',
            height: '75px',
            display: 'flex',
            borderRadius: '30px',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {t('link')}
        </motion.div>
      </Link>
    </>
  )
}

export default GoHome
