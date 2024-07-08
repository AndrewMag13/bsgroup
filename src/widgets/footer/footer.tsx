import { NextPage } from 'next'
import s from './footer.module.scss'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/navigation'
const Footer = () => {
  const t = useTranslations('home')
  const icons = ['telegram', 'taplink', 'behance', 'inst', 'youtube']
  return (
    <>
      <div className={s.container}>
        <div className={s.left}>
          <div>{t(`ui.phoneNumber`)}</div>
          <div>{t(`footer.email`)}</div>
          <div className={s.icons}>
            {icons.map((icon) => {
              return (
                <div key={icon}>
                  <Image
                    src={`/footer/${icon}.svg`}
                    width={24}
                    height={24}
                    alt={`icon of ${icon}`}
                  />
                </div>
              )
            })}
          </div>
        </div>
        <div className={s.right}>
          <Link href={'/privacy'}>{t('footer.privacyPolicy')}</Link>
          <Link href={'/terms'}>{t('footer.termsOfService')}</Link>
        </div>
        <Image
          src={'/footer/BS.svg'}
          width={334}
          height={303}
          alt={'bs footer'}
          sizes="min-width: 334px"
          className={s.image}
        />
      </div>
    </>
  )
}

export default Footer
