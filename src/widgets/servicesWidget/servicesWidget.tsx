import { NextPage } from 'next'
import {
  serviceAdvanced,
  serviceLanding,
  serviceMulti,
} from '@/shared/servicesText/servicesText'
import ServiceCard from '@/shared/ui/serviceCard/serviceCard'
import s from './servicesWidgets.module.scss'
const ServicesWidget: NextPage = () => {
  return (
    <>
      <div className={s.container}>
        <span className={s.title}>Наши услуги</span>
        <div className={s.servicesContainer}>
          <ServiceCard {...serviceLanding} />
          <ServiceCard {...serviceMulti} />
          <ServiceCard {...serviceAdvanced} />
        </div>
      </div>
    </>
  )
}

export default ServicesWidget
