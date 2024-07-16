import { NextPage } from 'next'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'

const Icons: NextPage = () => {
  const t = useTranslations('home.footer.iconsLinks')
  const icons = ['telegram', 'taplink', 'behance', 'inst', 'youtube']
  return (
    <>
      {icons.map((icon) => {
        return (
          <div key={icon}>
            <Link href={t(icon)}>
              <Image
                src={`/footer/${icon}.svg`}
                width={24}
                height={24}
                alt={`icon of ${icon}`}
              />
            </Link>
          </div>
        )
      })}
    </>
  )
}

export default Icons
