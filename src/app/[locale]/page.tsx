import ApplicationWidget from '@/widgets/applicationWidget/applicationWidget'
import MainBlock from '@/widgets/mainBlock/mainblock'
import PlanWidget from '@/widgets/planWidget/planWidget'
import ProjectWidget from '@/widgets/projectWidget/projectWidget'
import ServicesPage from '@/widgets/servicesWidget/servicesWidget'
import TechsWidget from '@/widgets/techsWidget/techsWidget'
import TextLen from '@/widgets/textLen/textLen'
import { unstable_setRequestLocale } from 'next-intl/server'

export interface IParams {
  params: { locale: string }
}
export default function App({ params: { locale } }: IParams) {
  unstable_setRequestLocale(locale)
  return (
    <>
      <main>
        <circle
          dangerouslySetInnerHTML={{ __html: '<!--silly easter egg)))-->' }}
        ></circle>
        <MainBlock />
        <TextLen />
        <ServicesPage />
        <PlanWidget />
        <ProjectWidget />
        <TechsWidget />
        <ApplicationWidget />
      </main>
    </>
  )
}
