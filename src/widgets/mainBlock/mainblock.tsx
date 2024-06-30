import Parallax from '@/shared/ui/parallax/parallax'
import s from './mainblock.module.scss'
import Napisat from '@/shared/ui/napisat/napisat'
import TypeWrote from '@/shared/ui/typeWrote/typeWrote'
import { useTranslations } from 'next-intl'

const MainBlockPage = () => {
  const t = useTranslations('home.page.mainBlock')
  return (
    <>
      <div className={s.main}>
        <Parallax />
        <div className={s.text}>
          <h1 className={s.title}>
            {t('headerFirst')}
            <b>
              <TypeWrote />
            </b>
            {t('headerSecond')}
          </h1>
          <div className={s.smalltext}>{t('smallText')}</div>
          <Napisat />
        </div>
      </div>
    </>
  )
}

export default MainBlockPage
