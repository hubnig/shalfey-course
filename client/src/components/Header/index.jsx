import Button from '@mui/material/Button'
import React from 'react'
import { Link } from 'react-router-dom'

import Container from '@mui/material/Container'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectIsAuth } from '../../redux/slices/auth'
import styles from './Header.module.scss'

export const Header = () => {
  const isAuth = useSelector(selectIsAuth)
  const dispatch = useDispatch()

  const onClickLogout = () => {
    if(window.confirm('Вы действительно хотите выйти?')){
      dispatch(logout())
      window.localStorage.removeItem('token')
    }
  }

  return (
    <div className={styles.root}>
      <Container maxWidth='lg'>
        <div className={styles.inner}>
          <Link className={styles.logo} to='/home'>
            <div>shalfey curse</div>
          </Link>
          <div className={styles.buttons}>
            {isAuth ? (
              <>
                <Link to='/add-post'>
                  <Button variant='contained'>Cоздать свой курс</Button>
                </Link>
                <Button
                  onClick={onClickLogout}
                  variant='contained'
                  color='error'
                >
                  Выйти
                </Button>
              </>
            ) : (
              <>
                <Link to='/login'>
                  <Button variant='outlined'>Войти</Button>
                </Link>
                <Link to='/register'>
                  <Button variant='contained'>Создать аккаунт</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </Container>
    </div>
  )
}
