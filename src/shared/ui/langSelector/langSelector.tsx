import { NextPage } from 'next'
import Image from 'next/image'
import s from './langSelector.module.scss'
import { APP_URL } from '@/shared/constants/constants'
const LangSelector: NextPage = () => {
  return (
    <>
      <div className={s.main}>
        <Image
          src={`${APP_URL}/icons/lang.svg`}
          alt="language selector"
          width={60}
          height={60}
        />
      </div>
    </>
  )
}

export default LangSelector
