'use client'
import { useTranslations } from 'next-intl'
import s from './projectWidget.module.scss'
import ProjectCard from '@/shared/ui/projectCard/projectCard'
import 'react-photo-view/dist/react-photo-view.css'
import { PhotoProvider } from 'react-photo-view'
const ProjectWidget = () => {
  const t = useTranslations('home.projects')
  const keys = ['fixer', 'webdeva', 'runSmart', 'amazon', 'vlad', 'grow']
  return (
    <>
      <div className={s.container} id="projects">
        <div className={s.title}>{t('title')}</div>
        <div className={s.cards__container}>
          <PhotoProvider speed={() => 1000}>
            <div className={s.cards}>
              {keys.map((key) => {
                return (
                  <div key={key}>
                    <ProjectCard title={key} />
                  </div>
                )
              })}
            </div>
          </PhotoProvider>
        </div>
      </div>
    </>
  )
}

export default ProjectWidget
