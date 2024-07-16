import { NextPage } from 'next'
import { useTranslations } from 'next-intl'
import s from './techWidget.module.scss'
import TechCard from '@/shared/ui/techCard/techCard'

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
    'SPA',
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
    'Classnames',
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
      <div className={s.container} id="techs">
        <div className={s.title}>{t('title')}</div>
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
      </div>
    </>
  )
}

export default TechsWidget
