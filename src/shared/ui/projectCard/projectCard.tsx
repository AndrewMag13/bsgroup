import { useTranslations } from 'next-intl'
import s from './projectCard.module.scss'
import Image from 'next/image'
import { PhotoView } from 'react-photo-view'
import { motion } from 'framer-motion'
interface IProjectCardProps {
  title: string
}
const ProjectCard = (props: IProjectCardProps) => {
  const t = useTranslations('home.projects')
  return (
    <>
      <motion.div
        className={s.container}
        initial={{
          opacity: 0,
          x:
            props.title === 'fixer' ||
            props.title === 'webdeva' ||
            props.title === 'runSmart'
              ? -50
              : 50,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
          transition: {
            duration: 1,
          },
        }}
        viewport={{ once: true }}
      >
        <motion.div
          className={s.image__container}
          whileHover={{ scale: 1.05 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{ cursor: 'pointer' }}
        >
          <PhotoView src={`/projects/${props.title}.png`}>
            <Image
              alt={'card image'}
              src={`/projects/${props.title}.png`}
              width={360}
              height={360}
              style={{ objectFit: 'cover' }}
              className={s.image}
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
