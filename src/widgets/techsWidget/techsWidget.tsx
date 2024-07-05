import { NextPage } from 'next'
import { useTranslations } from 'next-intl'

const TechsWidget: NextPage = () => {
  const keys = [
    'React',
    'Wordpress',
    'Git',
    'Tailwind',
    'Tilda',
    'Node.js',
    'Zustand',
    'Storybook',
    'Headless',
    'Next.js',
    'JS/TS',
    'CSS/SCSS',
    'FSD',
    'Tanstack query',
    'Swiper',
    'Prettier',
    'i18n',
    'Em/Rem',
    'Yarn',
    'Postgress',
    'Адаптивность',
    'PWA',
    'Flex',
    'Резиновая верстка',
  ]
  const t = useTranslations('home.page.techs')
  return (
    <>
      <div></div>
    </>
  )
}

export default TechsWidget
