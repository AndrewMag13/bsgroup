'use client'
import GoHome from "@/shared/ui/goHome/goHome";
import { useTranslations } from "next-intl"
import { MouseParallaxContainer, MouseParallaxChild } from "react-parallax-mouse";
export const dynamic = 'force-dynamic'
const NotFound = () => {
  const t = useTranslations('home.404')
  return (
    <>
      <MouseParallaxContainer globalFactorX={0.1} globalFactorY={0.1} containerStyle={{
        height: 'calc(100vh - 60px)',
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

        <div style={{
          marginTop: '2.5rem',
          fontSize: '2.5rem',
        }}
        >{t('title')}</div>
        <GoHome />
      </MouseParallaxContainer >
    </>
  )
}

export default NotFound
