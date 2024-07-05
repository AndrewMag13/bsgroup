import { useTranslations } from 'next-intl'
import s from './planCard.module.scss'
import cn from 'classnames'
interface ITitleProps {
  title: string
  direction: string
}
const PlanCard = (props: ITitleProps) => {
  const t = useTranslations('home.page.development')
  return (
    <>
      <div className={s.container}>
        <div className={s.card}>{t(`${props.title}`)}</div>
        {props.direction === 'down' ? (
          <div className={cn([s.border], [s.down])}></div>
        ) : props.direction === 'right' ? (
          <div className={cn([s.border], [s.right])}></div>
        ) : props.direction === 'up' ? (
          <div className={cn([s.border], [s.up])}></div>
        ) : (
          <div className={cn([s.border], [s.none])}></div>
        )}
      </div>
    </>
  )
}

export default PlanCard
