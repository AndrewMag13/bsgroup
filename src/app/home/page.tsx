import Header from '@/widgets/header/header'
import MainBlock from '@/widgets/mainBlock/mainblock'
import s from './home.module.scss'
import TextLen from '@/widgets/textLen/textLen'
import ServicesPage from '@/widgets/servicesWidget/servicesWidget'

const HomePage = () => {
  return (
    <>
      <div className={s.main}>
        <Header />
        <MainBlock />
        <TextLen />
        <ServicesPage />
      </div>
    </>
  )
}

export default HomePage
