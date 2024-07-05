import { useTranslations } from 'next-intl'
import s from './projectCard.module.scss'
import Image from 'next/image'
interface IProjectCardProps {
  title: string
}
const ProjectCard = (props: IProjectCardProps) => {
  const t = useTranslations('home.page')
  return (
    <>
      <div className={s.container}>
        <div className={s.image}>
          <Image
            alt={'card image'}
            src={'/projects/fixer.png'}
            width={360}
            height={360}
          />
        </div>
        <div className={s.title}>{t(`projects.list.${props.title}.title`)}</div>
        <div className={s.desc}>{t(`projects.list.${props.title}.desc`)}</div>
      </div>
    </>
  )
}

export default ProjectCard
