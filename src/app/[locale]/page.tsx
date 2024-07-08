import { unstable_setRequestLocale } from 'next-intl/server'
import MainBlock from '@/widgets/mainBlock/mainblock'
import TextLen from '@/widgets/textLen/textLen'
import ServicesPage from '@/widgets/servicesWidget/servicesWidget'
import PlanWidget from '@/widgets/planWidget/planWidget'
import ProjectWidget from '@/widgets/projectWidget/projectWidget'
import TechsWidget from '@/widgets/techsWidget/techsWidget'
import ApplicationWidget from '@/widgets/applicationWidget/applicationWidget'
interface IParams {
  params: { locale: string }
}
export default function App({ params: { locale } }: IParams) {
  unstable_setRequestLocale(locale)
  return (
    <>
      <MainBlock />
      <TextLen />
      <ServicesPage />
      <PlanWidget />
      <ProjectWidget />
      <TechsWidget />
      <ApplicationWidget />
    </>
  )
}
