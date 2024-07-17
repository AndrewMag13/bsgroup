import ServiceCard, { IWidgetProps } from '@/shared/ui/serviceCard/serviceCard'
import s from './servicesWidgets.module.scss'
import { useTranslations, useFormatter } from 'next-intl'
import { Fragment } from 'react'

const ServicesWidget = () => {
  const t = useTranslations('home.services')
  const f = useFormatter()
  const keys = ['serviceLanding', 'serviceMulti', 'serviceAdvanced']
  const bulletKeys = ['bullet1', 'bullet2', 'bullet3', 'bullet4']
  const enableMinor = false
  const keys2 = ['design', 'presentation', 'motion']
  const bulletSmallKeys = ['bullet1', 'bullet2']
  const propers = (type: string): IWidgetProps => {
    return {
      header: t(`${type}.header`),
      priceFormatFrom: t(`priceFormat.from`),
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
        <div className={s.servicesContainer}>
          {keys.map((key) => {
            return (
              <Fragment key={key}>
                <ServiceCard {...propers(key)} />
              </Fragment>
            )
          })}
        </div>
        <div className={s.servicesContainer}>
          {enableMinor
            ? keys2.map((key) => {
                return (
                  <Fragment key={key}>
                    <ServiceCard {...propers(key)} />
                  </Fragment>
                )
              })
            : ''}
        </div>
      </section>
    </>
  )
}

export default ServicesWidget
