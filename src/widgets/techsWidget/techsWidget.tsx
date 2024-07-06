import { NextPage } from 'next'
import { useTranslations } from 'next-intl'
import s from './techWidget.module.scss'
import TechCard from '@/shared/ui/techCard/techCard'

const TechsWidget: NextPage = () => {
  const keys = [
    'React',
    'DOM',
    'JQuery',
    'Wordpress',
    'Git',
    'Tailwind',
    'Bootstrap',
    'Tilda',
    'Nodejs',
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
    'JS/TS',
    'CSS/SCSS',
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
    'Em/Rem',
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
