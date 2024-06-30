import MainBlock from '@/widgets/mainBlock/mainblock'
import s from './home.module.scss'
import TextLen from '@/widgets/textLen/textLen'
import ServicesPage from '@/widgets/servicesWidget/servicesWidget'
import PlanWidget from '@/widgets/planWidget/planWidget'

const HomePage = () => {
  return (
    <>
      <div className={s.main}>
        <MainBlock />
        <TextLen />
        <ServicesPage />
        <PlanWidget />
      </div>
    </>
  )
}

export default HomePage
