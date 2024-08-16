import GoHome from '@/shared/ui/goHome/goHome'
import { getIntlKeys } from '@/shared/functions/getIntlKeys'
import s from './privacy.module.scss'
import { useTranslations } from 'next-intl'

const Privacy = () => {
  const t = useTranslations('home')
  const arr = getIntlKeys(t, 'priv.sections')

  return (
    <>
      <main className={s.container}>
        <h1 className={s.title}>{t('privacy.title')}</h1>
        <article className={s.text}>
          {arr.map((key) => {
            const karr = getIntlKeys(t, `priv.sections.${key}.content`)
            return (
              <div key={key} className="">
                <h2>
                  <b>{t(`priv.sections.${key}.title`)}</b>
                </h2>
                <br />
                {karr.map((i) => (
                  <p key={i}>{t(`priv.sections.${key}.content.${i}`)}</p>
                ))}
                <br />
              </div>
            )
          })}
        </article>
        <GoHome />
      </main>
    </>
  )
}

export default Privacy
