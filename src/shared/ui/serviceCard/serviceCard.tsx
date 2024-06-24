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
function numberWithSpaces(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
const ServiceCard = (props: IWidgetProps) => {
  return (
    <>
      <div className={s.container}>
        <div className={s.mainText}>
          <div className={s.header}>{props.header}</div>
          <div className={s.price}>от {numberWithSpaces(props.price)} руб.</div>
          <div className={s.serviceType}>{props.serviceType} </div>
        </div>

        <ul className={s.bulletList}>
          {props.bulletList.map((bullet) => {
            return (
              <li key={bullet.id} className={s.bullet}>
                {bullet.bullet}
              </li>
            )
          })}
        </ul>
        <div className={s.button}>
          <Napisat />
        </div>
      </div>
    </>
  )
}

export default ServiceCard
