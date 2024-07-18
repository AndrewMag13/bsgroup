import { IParams } from '../page'
import Privacy from '@/widgets/privacy/privacy'
import { unstable_setRequestLocale } from 'next-intl/server'

const PrivacyPage = ({ params: { locale } }: IParams) => {
  unstable_setRequestLocale(locale)
  return (
    <>
      <Privacy />
    </>
  )
}

export default PrivacyPage
