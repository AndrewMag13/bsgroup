import ServiceCard, { IWidgetProps } from '@/shared/ui/serviceCard/serviceCard'
import s from './servicesWidgets.module.scss'
import { useTranslations, useFormatter } from 'next-intl'
import { Fragment } from 'react'

const ServicesWidget = () => {
  const t = useTranslations('home.services')
  const keys = [
    'serviceLanding',
    'serviceMulti',
    'serviceAdvanced',
    'design',
    'presentation',
    'motion',
  ]
  const bulletKeys = ['bullet1', 'bullet2', 'bullet3', 'bullet4']
  const bulletSmallKeys = ['bullet1', 'bullet2']
  const propers = (type: string): IWidgetProps => {
    return {
      header: t(`${type}.header`),
      price: Number(t(`${type}.price`)),
      priceFormatFrom: t(`priceFormat.from`),
      priceFormatCurrency: t(`priceFormat.currency`),
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
    }
  }
  return (
    <>
      <div className={s.container} id="services">
        <span className={s.title}>{t('title')}</span>
        <div className={s.servicesContainer}>
          {keys.map((key) => {
            return (
              <Fragment key={key}>
                <ServiceCard {...propers(key)} />
              </Fragment>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default ServicesWidget
