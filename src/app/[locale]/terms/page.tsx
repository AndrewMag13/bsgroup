import { IParams } from '../page'
import Terms from '@/widgets/terms/terms'
import { unstable_setRequestLocale } from 'next-intl/server'

const TermsPage = ({ params: { locale } }: IParams) => {
  unstable_setRequestLocale(locale)
  return (
    <>
      <Terms />
    </>
  )
}

export default TermsPage
