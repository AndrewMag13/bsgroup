'use client'
import Image from 'next/image'
import Napisat from '../napisat/napisat'
import s from './serviceCard.module.scss'
import { motion } from 'framer-motion'
import { Tooltip } from '@nextui-org/tooltip'
export interface IWidgetProps {
  header: string
  priceFormatFrom: string
  price: string
  serviceType: string
  bulletList: string[]
  img: string
  desc: string
}
const variants = {
  active: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: 'easeOut',
    },
  },
  inactive: {
    opacity: 0,
    y: -40,
    transition: {
      duration: 0.3,
    },
  },
}
export const motionProps = {
  variants,
  initial: 'inactive',
  animate: 'active',
  exit: 'inactive',
}
const ServiceCard = (props: IWidgetProps) => {
  return (
    <>
      <Tooltip
        content={props.desc}
        showArrow={true}
        offset={8}
        placement={'top'}
        delay={0}
        closeDelay={0}
        motionProps={{
          variants: {
            exit: {
              opacity: 0,
              transition: {
                duration: 0.15,
                ease: 'easeIn',
              },
            },
            enter: {
              opacity: 1,
              transition: {
                duration: 0.5,
                ease: 'easeOut',
              },
            },
          },
        }}
        style={{
          zIndex: 10,
          display: 'flex',
          justifyContent: 'center',
          padding: '16px 16px',
          borderRadius: '30px',
          maxWidth: 360,
          backdropFilter: 'blur(20px) saturate(100%)',
          backgroundColor: 'rgba(51, 51, 51, 0.7)',
        }}
      >
        <motion.div
          className={s.container}
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          initial={{
            opacity: 0,
            x: props.bulletList.length % 4 === 0 ? 50 : -50,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          viewport={{ once: true }}
        >
          <Image
            src={`/services/${props.img}.svg`}
            alt={`image of ${props.img}`}
            width={40}
            height={40}
            className={s.img}
          />
          <div className={s.mainText}>
            <div className={s.header}>{props.header}</div>
            <div
              className={s.price}
            >{`${props.priceFormatFrom} ${props.price}`}</div>
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
        </motion.div>
      </Tooltip>
    </>
  )
}
export default ServiceCard
