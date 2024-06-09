import { NextPage } from 'next'
import s from './home.module.scss'
import { revalidatePath } from 'next/cache'
import Header from '@/widgets/header/header'
import Parallax from '@/shared/ui/parallax/parallax'
import BsLogoParallax from '@/shared/ui/bsParallaxLogo/bsLogoParallax'

const HomePage = () => {
  return (
    <>
      <Header />
      <Parallax />
      {/* <BsLogoParallax /> */}
    </>
  )
}

export default HomePage
