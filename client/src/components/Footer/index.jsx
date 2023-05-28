import Container from '@mui/material/Container'
import React from 'react'
import styles from './Footer.module.scss'

export const Footer = () => {
  return (
    <div className={styles.root}>
    <Container maxWidth='lg'>
      <div className={styles.inner}>
      © 2023 Shalfey
      <ul>
        <li>О нас</li>
        <li>Авторам</li>
        <li>Курсы</li>
      </ul>
      <ul>
        <li>Vk</li>
        <li>Tg</li>
        <li>Tw</li>
      </ul>
      </div>
    </Container>
  </div>
  )
}

