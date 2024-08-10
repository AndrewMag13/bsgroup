import Image from 'next/image'
import { NextPage } from 'next'
import TechCard from '@/shared/ui/techCard/techCard'
import s from './techWidget.module.scss'
import { useTranslations } from 'next-intl'

const TechsWidget: NextPage = () => {
  const keys = [
    'html',
    'css',
    'js',
    'React',
    'Docker',
    'Wordpress',
    'Git',
    'Tailwind',
    'Tilda',
    'Express',
    'PWA',
    'Playwright',
    'Redux',
    'Zustand',
    'React-hook-form',
    'React-typed',
    'Storybook',
    'Nextjs',
    'TS',
    'SCSS',
    'PostCSS',
    'Framer',
    'FSD',
    'Tanstack',
    'Swiper',
    'Tsparticles',
    'Hot toast',
    'Prettier',
    'i18n',
    'a11y',
    'NextUI',
    'Postgress',
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
