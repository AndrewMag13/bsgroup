'use client'
import { NextPage } from 'next'
import toast, { Toaster } from 'react-hot-toast'
import { useTranslations } from 'next-intl'
import s from './applicationWidget.module.scss'
import OtpravitButton from '@/shared/ui/otpravit/otpravit'
import { useForm, SubmitHandler } from 'react-hook-form'
import { motion } from 'framer-motion'
import { ErrorMessage } from '@hookform/error-message'
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
    reset,
    formState: { errors },
  } = useForm<Inputs>({ mode: 'onChange' })
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    toast(t('done'), {
      duration: 2000,
      icon: '👏',
      style: {
        font: 'inter',
      },
    })
    reset()
  }

  return (
    <>
      <div className={s.container} id="application">
        <Toaster />
        <label className={s.title}>{t('title')}</label>
        <motion.form
          noValidate
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
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className={s.forms}>
            <input
              placeholder={t('fields.name')}
              className={s.input}
              {...register('name', { required: true, maxLength: 32 })}
            ></input>
            <input
              placeholder={t('fields.phone')}
              className={s.input}
              {...register('phone', {
                required: true,
                maxLength: 50,
                pattern: {
                  value: /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]{8,14}$/g,
                  message: t('phoneError'),
                },
              })}
              type="number"
            />
            <ErrorMessage
              errors={errors}
              name="phone"
              render={({ message }) => (
                <div className="self-center flex  justify-center align-bottom py-10">
                  <span className={'absolute mt-10'}>{message}</span>
                </div>
              )}
            />
            <input
              placeholder={t('fields.email')}
              className={s.input}
              {...register('email', {
                required: true,
                maxLength: 50,
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: t('emailError'),
                },
              })}
              type="email"
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <div className="self-center flex  justify-center align-bottom py-10">
                  <span className={'absolute mt-10'}>{message}</span>
                </div>
              )}
            />
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
