import Image from 'next/image'
import { NextPage } from 'next'
import TechCard from '@/shared/ui/techCard/techCard'
import { getIntlKeys } from '@/shared/functions/getIntlKeys'
import s from './techWidget.module.scss'
import { useTranslations } from 'next-intl'

const TechsWidget: NextPage = () => {
  const t = useTranslations('home.techs')
  const keys = getIntlKeys(t, 'list')
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
