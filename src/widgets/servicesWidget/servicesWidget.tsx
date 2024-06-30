import ServiceCard, { IWidgetProps } from '@/shared/ui/serviceCard/serviceCard'
import s from './servicesWidgets.module.scss'
import { useTranslations } from 'next-intl'
import { Fragment } from 'react'

const ServicesWidget = () => {
  const t = useTranslations('home.page.services')
  const keys = ['serviceLandingText', 'serviceMultiText', 'serviceAdvancedText']
  const bulletKeys = ['bullet1', 'bullet2', 'bullet3', 'bullet4', 'bullet5']
  const propers = (type: string): IWidgetProps => {
    return {
      header: t(`servicesText.${type}.header`),
      price: Number(t(`servicesText.${type}.price`)),
      priceFormatFrom: t(`priceFormat.from`),
      priceFormatCurrency: t(`priceFormat.currency`),
      serviceType: t(`servicesText.${type}.serviceType`),
      bulletList: bulletKeys.map((bulletKey) => {
        return t(`servicesText.${type}.bulletList.${bulletKey}`)
      }),
    }
  }
  return (
    <>
      <div className={s.container}>
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
