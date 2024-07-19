import Icons from '@/shared/ui/icons/icons'
import Image from 'next/image'
import { Link } from '@/navigation'
import s from './footer.module.scss'
import { useTranslations } from 'next-intl'

const Footer = () => {
  const t = useTranslations('home')
  return (
    <>
      <footer className={s.container}>
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
          <Link href={'/privacy'} prefetch={true}>
            {t('privacy.title')}
          </Link>
          <Link href={'/terms'} prefetch={true}>
            {t('terms.title')}
          </Link>
        </div>
        <Image
          src={'/footer/BS.svg'}
          width={334}
          height={303}
          alt={'bs footer'}
          sizes="min-width: 334px"
          className={s.image}
        />
      </footer>
    </>
  )
}

export default Footer
