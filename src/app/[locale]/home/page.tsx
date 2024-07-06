import MainBlock from '@/widgets/mainBlock/mainblock'
import s from './home.module.scss'
import TextLen from '@/widgets/textLen/textLen'
import ServicesPage from '@/widgets/servicesWidget/servicesWidget'
import PlanWidget from '@/widgets/planWidget/planWidget'
import ProjectWidget from '@/widgets/projectWidget/projectWidget'
import TechsWidget from '@/widgets/techsWidget/techsWidget'
import ApplicationWidget from '@/widgets/applicationWidget/applicationWidget'

const HomePage = () => {
  return (
    <>
      <div className={s.main}>
        <MainBlock />
        <TextLen />
        <ServicesPage />
        <PlanWidget />
        <ProjectWidget />
        <TechsWidget />
        <ApplicationWidget />
      </div>
    </>
  )
}

export default HomePage
