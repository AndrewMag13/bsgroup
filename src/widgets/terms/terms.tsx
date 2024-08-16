import GoHome from '@/shared/ui/goHome/goHome'
import { getIntlKeys } from '@/shared/functions/getIntlKeys'
import s from './terms.module.scss'
import { useTranslations } from 'next-intl'

const Terms = () => {
  const t = useTranslations('home')
  const arr = getIntlKeys(t, 'terms.sections.sections')
  return (
    <>
      <main className={s.container}>
        <h1 className={s.title}>{t('terms.title')}</h1>
        <article className={s.text}>
          {t('terms.sections.title')}
          <br />
          {t('terms.sections.description')}
          <br />
          <br />
          {arr.map((key) => {
            const karr = getIntlKeys(
              t,
              `terms.sections.sections.${key}.subsections`,
            )
            return (
              <div key={key} className="">
                <h2>
                  <b>{t(`terms.sections.sections.${key}.title`)}</b>
                </h2>
                <br />
                {karr.map((i) => (
                  <p key={i}>
                    {t(
                      `terms.sections.sections.${key}.subsections.${i}.description`,
                    )}
                  </p>
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

export default Terms
