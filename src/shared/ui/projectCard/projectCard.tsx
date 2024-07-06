import { useTranslations } from 'next-intl'
import s from './projectCard.module.scss'
import Image from 'next/image'
import { PhotoView } from 'react-photo-view'

interface IProjectCardProps {
  title: string
}
const ProjectCard = (props: IProjectCardProps) => {
  const t = useTranslations('home.projects')
  return (
    <>
      <div className={s.container}>
        <div className={s.image__container}>
          <PhotoView src={'/projects/fixer.png'}>
            <Image
              alt={'card image'}
              src={'/projects/fixer.png'}
              width={360}
              height={360}
              style={{ objectFit: 'cover' }}
              className={s.image}
            />
          </PhotoView>
        </div>
        <div className={s.title}>{t(`list.${props.title}.title`)}</div>
        <div className={s.desc}>{t(`list.${props.title}.desc`)}</div>
      </div>
    </>
  )
}

export default ProjectCard
