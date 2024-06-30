import Napisat from '../napisat/napisat'
import s from './serviceCard.module.scss'

export interface IWidgetProps {
  header: string
  price: number
  priceFormatFrom: string
  priceFormatCurrency: string
  serviceType: string
  bulletList: string[]
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
          <div
            className={s.price}
          >{`${props.priceFormatFrom} ${numberWithSpaces(props.price)} ${props.priceFormatCurrency}`}</div>
          <div className={s.serviceType}>{props.serviceType}</div>
        </div>

        <ul className={s.bulletList}>
          {props.bulletList.map((bullet) => {
            return (
              <li key={bullet} className={s.bullet}>
                <span>{bullet}</span>
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
