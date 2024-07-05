import { useTranslations } from 'next-intl'
import s from './planWidget.module.scss'
import PlanCard from '@/shared/ui/planCard/planCard'

const PlanWidget = () => {
  const t = useTranslations('home.page.development')
  const keys1 = ['step1', 'step2', 'step3']
  const key4 = 'step4'
  const keys2 = ['step6', 'step7', 'step8']
  const key5 = 'step5'

  return (
    <>
      <div className={s.container} id="development">
        <div className={s.title}>{t('title')}</div>
        <div className={s.cards}>
          {keys1.map((key1) => {
            return (
              <div key={key1} className={s.card}>
                <PlanCard title={key1} direction="down" />
              </div>
            )
          })}
          <PlanCard title={key4} direction="right" />
          {keys2.reverse().map((key2) => {
            return (
              <div key={key2} className={s.card}>
                <PlanCard title={key2} direction="up" />
              </div>
            )
          })}
          <PlanCard title={key5} direction="none" />
        </div>
      </div>
    </>
  )
}

export default PlanWidget
