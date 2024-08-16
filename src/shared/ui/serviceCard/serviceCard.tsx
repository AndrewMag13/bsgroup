'use client'

import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react'

import Image from 'next/image'
import Napisat from '../napisat/napisat'
import { motion } from 'framer-motion'
import s from './serviceCard.module.scss'

export interface IWidgetProps {
  header: string
  priceFormatFrom: string
  beforePrice: string
  price: string
  serviceType: string
  bulletList: string[]
  img: string
  desc: string
}

const ServiceCard = (props: IWidgetProps) => {
  return (
    <>
      <Popover
        showArrow
        offset={8}
        placement={'top'}
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
        <PopoverTrigger>
          <motion.div
            className={s.container}
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Image
              src={`/services/${props.img}.svg`}
              alt={`image of ${props.img}`}
              width={40}
              height={40}
              className={s.img}
            />
            <div className={s.mainText}>
              <div
                className={s.serviceType}
                style={{
                  background:
                    props.header === 'Landing-page'
                      ? 'linear-gradient(90deg,  #6ee556 0%, #9fda20 100%)'
                      : props.header === 'Multi-page'
                        ? 'linear-gradient(90deg,  rgb(246, 31, 255) 0%, rgb(85, 205, 226) 100%)'
                        : 'linear-gradient(90deg,  rgb(197, 23, 104) 0%, rgb(207, 121, 128) 100%)',
                  backgroundClip: 'text',
                }}
              >
                {props.serviceType}
              </div>
              <div className={s.header}>{props.header}</div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                className={s.strike}
              >{`${props.priceFormatFrom} ${props.beforePrice}`}</motion.div>
              <div
                className={s.price}
              >{`${props.priceFormatFrom} ${props.price}`}</div>
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
        </PopoverTrigger>
        <PopoverContent>
          <div>{props.desc}</div>
        </PopoverContent>
      </Popover>
    </>
  )
}
export default ServiceCard
