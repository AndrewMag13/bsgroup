import s from './header.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import { APP_URL } from '@/shared/constants/constants'
import { useTranslations } from 'next-intl'
import LangSelector from '@/shared/ui/langSelector/langSelector'

const Header = () => {
  const t = useTranslations('home.header')
  const headerKeys = [
    'services',
    'development',
    'projects',
    'techs',
    'application',
  ]
  return (
    <>
      <circle
        dangerouslySetInnerHTML={{ __html: '<!--silly easter egg)))-->' }}
      ></circle>
      <div className={s.header}>
        <span className={s.header__logo}>
          <Link href={'#main'}>
            <Image
              src={`/icons/bsHeader.svg`}
              alt="bs icon"
              width={98}
              height={33}
            />
          </Link>
        </span>
        <div className={s.header__links}>
          <ul className={s.header__links__list}>
            {headerKeys.map((headerKey) => {
              return (
                <li className={s.header__links__element} key={headerKey}>
                  <Link href={t(`links.${headerKey}.href`)}>
                    {t(`links.${headerKey}.title`)}
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        {/* <div className={s.header__phone}>
          <span>
            <Image
              src={`/icons/phone.svg`}
              width={24}
              height={24}
              alt="phone icon"
            />
          </span>
          <span className={s.number}>{t('')}</span>
        </div> */}
        <div className={s.lang}>
          <LangSelector />
        </div>
      </div>
    </>
  )
}

export default Header
