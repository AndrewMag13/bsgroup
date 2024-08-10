'use client'

import 'react-photo-view/dist/react-photo-view.css'

import Image from 'next/image'
import { PhotoProvider } from 'react-photo-view'
import ProjectCard from '@/shared/ui/projectCard/projectCard'
import s from './projectWidget.module.scss'
import { useTranslations } from 'next-intl'

const ProjectWidget = () => {
  const t = useTranslations('home.projects')
  const keys = ['fixer', 'webDeva', 'runSmart', 'amazon', 'vlad', 'grow']
  return (
    <>
      <section className={s.container} id="projects">
        <h2 className={s.title}>{t('title')}</h2>
        <Image
          src={'/figures/cross.svg'}
          width={200}
          height={200}
          alt="deco figure"
          className={s.figure}
        />
        <div className={s.cards__container}>
          <PhotoProvider
            speed={() => 600}
            easing={(type) =>
              type === 2 ? 'cubic-bezier(1,.5,0,.5)' : 'cubic-bezier(1,.5,0,.5)'
            }
          >
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
      </section>
    </>
  )
}

export default ProjectWidget
