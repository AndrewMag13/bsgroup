import { useTranslations } from 'next-intl'
import s from './projectWidget.module.scss'
import ProjectCard from '@/shared/ui/projectCard/projectCard'
const ProjectWidget = () => {
  const t = useTranslations('home.page')
  // const keys1 = ['fixer', 'webdeva', 'runSmart']
  // const keys2 = ['ccTracker', 'myCourse', 'aliShop']
  const keys = [
    'fixer',
    'webdeva',
    'runSmart',
    'ccTracker',
    'myCourse',
    'aliShop',
  ]
  return (
    <>
      <div className={s.container}>
        <div className={s.title}>{t('projects.title')}</div>
        <div className={s.cards__container}>
          <div className={s.cards}>
            {keys.map((key) => {
              return (
                <div key={key}>
                  <ProjectCard title={key} />
                </div>
              )
            })}
          </div>
          <div className={s.cards}>
            {/* {keys2.map((key) => {
              return (
                <div key={key}>
                  <ProjectCard title={key} />
                </div>
              )
            })} */}
          </div>
        </div>
      </div>
    </>
  )
}

export default ProjectWidget
