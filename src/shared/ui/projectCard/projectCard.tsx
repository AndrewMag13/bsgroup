import Image from 'next/image'
import { PhotoView } from 'react-photo-view'
import { motion } from 'framer-motion'
import s from './projectCard.module.scss'
import { useTranslations } from 'next-intl'

interface IProjectCardProps {
  title: string
}
const ProjectCard = (props: IProjectCardProps) => {
  const t = useTranslations('home.projects')
  return (
    <>
      <motion.div className={s.container}>
        <motion.div
          className={s.image__container}
          whileTap={{ scale: 1 }}
          whileHover={{ scale: 1.04 }}
          transition={{ type: 'tween', stiffness: 300, damping: 20 }}
          style={{ cursor: 'pointer' }}
        >

          <PhotoView src={`/projects/${props.title}.webp`}>
          <Image
              alt={'project card image'}
              src={`/projects/${props.title}.webp`}
              width={360}
              height={360}
              style={{ objectFit: 'cover' }}
              className={s.image}
              onError={(e) => {
                const imgElement = e.currentTarget as HTMLImageElement;
                imgElement.onerror = null; // Prevent infinite loop
                imgElement.src = `/projects/${props.title}.png`;
              }}
            />
          </PhotoView>

        </motion.div>
        <div className={s.title}>{t(`list.${props.title}.title`)}</div>
        <div className={s.desc}>{t(`list.${props.title}.desc`)}</div>
      </motion.div>
    </>
  )
}

export default ProjectCard
