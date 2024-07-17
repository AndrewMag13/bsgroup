'use client'

import { SubmitHandler, useForm } from 'react-hook-form'
import toast, { Toaster } from 'react-hot-toast'

import { ErrorMessage } from '@hookform/error-message'
import { NextPage } from 'next'
import OtpravitButton from '@/shared/ui/otpravit/otpravit'
import { motion } from 'framer-motion'
import s from './applicationWidget.module.scss'
import { useTranslations } from 'next-intl'

interface Inputs {
  name: string
  phone: string
  email: string
}

const ApplicationWidget: NextPage = () => {
  console.log(process.env.APP_ENV)
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
      <section className={s.container} id="application">
        <Toaster />
        <h2 className={s.title}>{t('title')}</h2>
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
      </section>
    </>
  )
}

export default ApplicationWidget
