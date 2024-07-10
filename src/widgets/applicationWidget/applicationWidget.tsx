'use client'
import { NextPage } from 'next'
import { useTranslations } from 'next-intl'
import s from './applicationWidget.module.scss'
import OtpravitButton from '@/shared/ui/otpravit/otpravit'
import { useForm, SubmitHandler } from 'react-hook-form'
import { motion } from 'framer-motion'
interface Inputs {
  name: string
  phone: string
  email: string
}

const ApplicationWidget: NextPage = () => {
  const t = useTranslations('home.application')
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)
  return (
    <>
      <div className={s.container} id="application">
        <div className={s.title}>{t('title')}</div>
        <motion.form
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
            transition: {
              duration: 1,
            },
          }}
          style={{
            zIndex: 10,
          }}
          viewport={{ once: true }}
        >
          <div className={s.forms}>
            <input placeholder={t('fields.name')} className={s.input}></input>
            <input placeholder={t('fields.phone')} className={s.input}></input>
            <input placeholder={t('fields.email')} className={s.input}></input>
          </div>
          <div className={s.otpravit}>
            <OtpravitButton />
          </div>
        </motion.form>
      </div>
    </>
  )
}

export default ApplicationWidget
