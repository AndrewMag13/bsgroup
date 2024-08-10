import ServiceCard, { IWidgetProps } from '@/shared/ui/serviceCard/serviceCard'
import { useFormatter, useTranslations } from 'next-intl'

import { Fragment } from 'react'
import Image from 'next/image'
import s from './servicesWidgets.module.scss'

const ServicesWidget = () => {
  const t = useTranslations('home.services')
  const f = useFormatter()
  // const keys = ['serviceLanding', 'serviceMulti', 'serviceAdvanced']
  const keys = ['serviceLanding', 'serviceMulti']
  const bulletKeys = ['bullet1', 'bullet2', 'bullet3', 'bullet4']
  const enableMinor = false
  const keys2 = ['design', 'presentation', 'motion']
  const bulletSmallKeys = ['bullet1', 'bullet2']
  const propers = (type: string): IWidgetProps => {
    return {
      header: t(`${type}.header`),
      priceFormatFrom: t(`priceFormat.from`),
      beforePrice: f.number(Number(t(`${type}.beforePrice`)), {
        style: 'currency',
        currency: t(`priceFormat.currency`),
      }),
      price: f.number(Number(t(`${type}.price`)), {
        style: 'currency',
        currency: t(`priceFormat.currency`),
      }),
      serviceType: t(`${type}.serviceType`),
      bulletList:
        type !== 'design' && type !== 'presentation' && type !== 'motion'
          ? bulletKeys.map((bulletKey) => {
              return t(`${type}.bulletList.${bulletKey}`)
            })
          : bulletSmallKeys.map((bulletKey) => {
              return t(`${type}.bulletList.${bulletKey}`)
            }),
      img: type,
      desc: t(`${type}.desc`),
    }
  }
  return (
    <>
      <section className={s.container} id="services">
        <h2 className={s.title}>{t('title')}</h2>
        <Image
          src={'/figures/dots.svg'}
          width={200}
          height={80}
          alt="deco figure"
          className={s.figure}
        />
        <div className={s.servicesContainer}>
          {keys.map((key) => {
            return (
              <Fragment key={key}>
                <ServiceCard {...propers(key)} />
              </Fragment>
            )
          })}
        </div>
        {enableMinor ? (
          <div className={s.servicesContainer}>
            {keys2.map((key) => {
              return (
                <Fragment key={key}>
                  <ServiceCard {...propers(key)} />
                </Fragment>
              )
            })}
          </div>
        ) : (
          ''
        )}
      </section>
    </>
  )
}

export default ServicesWidget
