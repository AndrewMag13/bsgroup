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

      }}>
        <MouseParallaxChild factorX={0.2} factorY={0.3} style={{
          zIndex: '3',
        }}>
          <h1 style={{
            fontSize: '12.5rem',
            fontWeight: '700',
            lineHeight: '12.5rem',
          }}
          >404</h1>
        </MouseParallaxChild>
        <div style={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10rem'
        }}>
          <MouseParallaxChild factorX={0.1} factorY={0.2} style={{
            zIndex: '0',
          }}>
            <div style={{
              fontSize: '12.5rem',
              fontWeight: '700',
              lineHeight: '12.5rem',
              color: '#161616'
            }}
            >404</div>
          </MouseParallaxChild>
        </div>
        {/* <MouseParallaxChild factorX={0.4} factorY={0.6} style={{
          zIndex: '2',
        }}> */}
        <div style={{
          marginTop: '3.75rem',
          fontSize: '2.5rem',
        }}
        >{t('title')}</div>
        {/* </MouseParallaxChild> */}
        <div style={{
          fontWeight: '700',
          marginTop: '5rem',
          fontSize: '2rem',
        }}>
          <Link href="/" >{t('link')}</Link>
        </div>
      </MouseParallaxContainer >
    </>
  )
}

export default NotFound
