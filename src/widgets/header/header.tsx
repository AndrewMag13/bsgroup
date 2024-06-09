import { NextPage } from 'next'
import s from './header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import MainBlock from '../mainBlock/mainblock'
import MenuSwitcher from '@/shared/ui/menu/menu'

const Header: NextPage = () => {
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: '<!--silly-->' }}></div>
      <div className={s.header}>
        <span className={s.header__logo}>Logo</span>
        <span className={s.header__links}>
          <ul className={s.header__links__list}>
            <li className={s.header__links__element}>
              <Link href="/">Услуги</Link>
            </li>
            <li className={s.header__links__element}>
              <Link href="/">Проекты</Link>
            </li>
            <li className={s.header__links__element}>
              <Link href="/">О компании</Link>
            </li>
            <li className={s.header__links__element}>
              <Link href="/">Блог</Link>
            </li>
            <li className={s.header__links__element}>
              <Link href="/">Контакты</Link>
            </li>
          </ul>
        </span>
        {/* <span>
          <MenuSwitcher />
        </span> */}
        <span className={s.header__phone}>
          <span>
            <Image
              alt="telegram link"
              src="/icons/telegram.svg"
              width={20}
              height={20}
            />
          </span>
          <span>+79371384440</span>
          <span></span>
        </span>
      </div>
    </>
  )
}

export default Header
