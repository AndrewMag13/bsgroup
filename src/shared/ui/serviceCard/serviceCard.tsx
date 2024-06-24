import Napisat from '../napisat/napisat'
import s from './serviceCard.module.scss'
interface IBulletList {
  id: number
  bullet: string
}
interface IWidgetProps {
  header: string
  price: number
  serviceType: string
  bulletList: IBulletList[]
}
const ServiceCard = (props: IWidgetProps) => {
  return (
    <>
      <div className={s.container}>
        <div className={s.header}>{props.header}</div>
        <div className={s.price}>{props.price}</div>
        <div className={s.serviceType}>{props.serviceType} </div>
        <div className={s.bulletList__container}>
          <ul className={s.bulletList}>
            {props.bulletList.map((bullet) => {
              return <li key={bullet.id}>{bullet.bullet}</li>
            })}
          </ul>
        </div>
        <div>
          <Napisat />
        </div>
      </div>
    </>
  )
}

export default ServiceCard
