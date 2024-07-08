'use client'
import Image from 'next/image'
import Napisat from '../napisat/napisat'
import s from './serviceCard.module.scss'
import { motion } from 'framer-motion'
export interface IWidgetProps {
  header: string
  price: number
  priceFormatFrom: string
  priceFormatCurrency: string
  serviceType: string
  bulletList: string[]
  img: string
}
function numberWithSpaces(x: number) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
}
const ServiceCard = (props: IWidgetProps) => {
  return (
    <>
      <motion.div
        className={s.container}
        whileHover={{ scale: 1.02 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        initial={{  
          opacity: 0,
          // if odd index card,slide from right instead of left
          x: props.bulletList.length % 4 === 0 ? 50 : -50,
        }}
        whileInView={{
          opacity: 1,
          x: 0, // Slide in to its original position
          transition: {
            duration: 1, // Animation duration
          },
        }}
        viewport={{ once: true }}
      >
        <Image
          src={`/services/${props.img}.svg`}
          alt={props.img}
          width={40}
          height={40}
          className={s.img}
        />
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
        <div className={s.desc}></div>
        <div className={s.button}>
          <Napisat />
        </div>
      </motion.div>
    </>
  )
}
export default ServiceCard
