import Image from 'next/image'
import { NextPage } from 'next'
import TechCard from '@/shared/ui/techCard/techCard'
import s from './techWidget.module.scss'
import { useTranslations } from 'next-intl'

const TechsWidget: NextPage = () => {
  const fKeys = ['html', 'css', 'js']
  const keys = [
    'React',
    'DOM',
    'JSON',
    'Docker',
    'JQuery',
    'Wordpress',
    'Git',
    'Tailwind',
    'Bootstrap',
    'Tilda',
    'Nodejs',
    'Express',
    'Nest',
    'PWA',
    'Playwright',
    'REST',
    'Redux',
    'Zustand',
    'React-hook-form',
    'React-photo-view',
    'React-typed',
    'Storybook',
    'Headless',
    'Nextjs',
    'CSR/SSR',
    'TS',
    'SCSS',
    'PostCSS',
    'Framer',
    'FSD',
    'Tanstack',
    'Swiper',
    'Parallax',
    'Tsparticles',
    'Hot toast',
    'Prettier',
    'i18n',
    'a11y',
    'NextUI',
    'Yarn',
    'Postgress',
    'Adaptability',
    'Flex',
    'Grid',
    'Responsive',
  ]
  const t = useTranslations('home.techs')
  return (
    <>
      <section className={s.container} id="techs">
        <h2 className={s.title}>{t('title')}</h2>
        <Image
          src={'/figures/rect.svg'}
          width={200}
          height={200}
          alt="deco figure"
          className={s.figure}
        />
        <div className={s.techs}>
          {fKeys.map((key) => {
            return (
              <div key={key} className={s.fkey}>
                <TechCard title={key} />
              </div>
            )
          })}
        </div>
        <div className={s.techs}>
          {keys.map((key) => {
            return (
              <div key={key}>
                <TechCard title={key} />
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default TechsWidget
