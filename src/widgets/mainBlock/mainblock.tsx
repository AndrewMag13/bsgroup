import Parallax from '@/shared/ui/parallax/parallax'
import s from './mainblock.module.scss'
import Napisat from '@/shared/ui/napisat/napisat'
import TypeWrote from '@/shared/ui/typeWrote/typeWrote'

const MainBlockPage = () => {
  return (
    <>
      <div className={s.main}>
        <Parallax />
        <div className={s.text}>
          <h1 className={s.title}>
            Разрабатываем
            <b>
              <TypeWrote />
            </b>
            сайты
          </h1>
          <div className={s.smalltext}>
            А также поддерживаем и продвигаем их
          </div>
          <Napisat />
        </div>
      </div>
    </>
  )
}

export default MainBlockPage
