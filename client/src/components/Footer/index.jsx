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
      <li><a href='/'>О нас</a></li>
        <li><a href='#'>Авторам</a></li>
        <li><a href='#'>Курсы</a></li>
      </ul>
      <ul>
        <li><a href='#'><img src="./icon/vk.png"  alt="vk" width='25px'/></a></li>
        <li><a href='#'><img src="./icon/tg.png" alt="tg" width='25px' /></a></li>
        <li><a href='#'><img src="./icon/inst.png" alt="inst" width='25px' /></a></li>
      </ul>
      </div>
    </Container>
  </div>
  )
}

