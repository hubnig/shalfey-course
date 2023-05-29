import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { fetchRegister, selectIsAuth } from '../redux/slices/auth'
import styles from './Registration/Login.module.scss'

export const Hello = () => {
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch()
  const {
    register,setError,
    handleSubmit,
    formState: { errors, isValid }
  } = useForm({
    defaultValues: {
      fullName: 'Даниил Чернецов',
      email: 'danil@mail.ru',
      password: '123321'
    },
    mode: 'onChange'
  })

  const onSubmit = async (values) => {
    const data = await dispatch(fetchRegister(values))
    if (!data.payload) {
      return alert('Заявка отправлена!')
    }
    if ('token' in data.payload) {
      window.localStorage.setItem('token', data.payload.token)
    }
  }
  return (
    <div className='main'>
      <div className='Text'>
        <h1>Шалфей образовательная платформа!</h1>
        <p>Как говорил товарищ Ленин: "Учить, учиться и ещё раз учиться!"</p>
        <Link to='/home'>
          <Button variant='contained'>Начать учиться</Button>
        </Link>
      </div>
      <div className='imgLen'>
        <img src='lenin2 (1).png' alt='lenin' width='500px' />
      </div>
      <div className='desc'>
        <p>
          <strong>Шалфей</strong> - компания, которая заботится о вашем
          спокойствии и развитии. Мы создали сайт с курсами, чтобы каждый мог
          находить в себе новые возможности и развиваться в удобном темпе. Наши
          курсы доступны для всех, и мы приветствуем тех, кто хочет создавать
          свои курсы и делиться своими знаниями с другими. Мы стремимся
          создавать сообщество людей, которые развиваются вместе и делятся
          своими успехами. Присоединяйтесь к нашему сообществу и начните свой
          путь к успеху уже сегодня!
        </p>
        <Paper classes={{ root: styles.root }}>
        <Typography classes={{ root: styles.title }} variant='h5'>
          Форма связи
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <TextField
            error={Boolean(errors.fullName?.message)}
            helperText={errors.fullName?.message}
            {...register('fullName', { required: 'Укажите своё ФИО!' })}
            className={styles.field}
            label='Полное имя'
            fullWidth
          />
          <TextField
            error={Boolean(errors.email?.message)}
            helperText={errors.email?.message}
            {...register('email', { required: 'Укажите почту!' })}
            className={styles.field}
            label='E-Mail'
            fullWidth
          />
          <TextField
            error={Boolean(errors.password?.message)}
            helperText={errors.password?.message}
            {...register('password', { required: 'Укажите телефон!' })}
            className={styles.field}
            label='Телефон'
            fullWidth
          />
          <Button
            disabled={!isValid}
            type='submit'
            size='large'
            variant='contained'
            fullWidth
          >
            Отправить заявку
          </Button>
        </form>
      </Paper>
      </div>
    </div>
  )
}
