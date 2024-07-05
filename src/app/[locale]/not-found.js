'use client'
import { useTranslations } from "next-intl"
import Link from "next/link"
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
const NotFound = () => {
  const t = useTranslations('home.404')
  return (
    <>
      <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} containerStyle={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        justifyItems: 'center',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative'
      }}>
        <MouseParallaxChild factorX={0.3} factorY={0.5}>
          <h1 style={{
            fontSize: '12.5rem',
            fontWeight: '700',
            lineHeight: '12.5rem',
          }}

          >404</h1>
        </MouseParallaxChild>
        <MouseParallaxChild factorX={0.6} factorY={0.8}>
          <div style={{
            marginTop: '5rem',
            fontSize: '3rem',
          }}
          >{t('title')}</div>
        </MouseParallaxChild>
        <div style={{
          fontWeight: '700',
          marginTop: '3.75rem',
          fontSize: '2rem',
        }}>
          <Link href="/" >{t('link')}</Link>
        </div>
      </MouseParallaxContainer >
    </>
  )
}

export default NotFound
