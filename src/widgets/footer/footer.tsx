import { NextPage } from 'next'
import s from './footer.module.scss'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { Link } from '@/navigation'
import Icons from '@/shared/ui/icons/icons'
const Footer = () => {
  const t = useTranslations('home')

  return (
    <>
      <div className={s.container}>
        <div className={s.left}>
          <div>
            <Link href={`tel:${t(`ui.phoneNumber`)}`}>
              {t(`ui.phoneNumber`)}
            </Link>
          </div>
          <div>
            <Link href="mailto:bsgroup.dev@yahoo.com">{t(`footer.email`)}</Link>
          </div>
          <div className={s.icons}>
            <Icons />
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
