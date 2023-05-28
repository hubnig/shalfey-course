import Button from '@mui/material/Button'
import React from 'react'
import { Link } from 'react-router-dom'

export const Hello = () => {
  return (
    <div className='main'>
      <div className='Text'>
        <h1>Шалфей образовательная платформа №1</h1>
        <p>Как говорил товарищ Ленин: "Учить, учиться и ещё раз учиться!"</p>
        <Link to='/home'>
          <Button variant='contained'>Начать учиться</Button>
        </Link>
      </div>
      <div className='imgLen'>
        <img src='lenin2.jpg' alt='lenin' width='500px' />
      </div>
      <div className='desc'><p><strong>Шалфей</strong>  - компания, которая заботится о вашем спокойствии и развитии. Мы создали сайт с курсами, чтобы каждый мог находить в себе новые возможности и развиваться в удобном темпе. Наши курсы доступны для всех, и мы приветствуем тех, кто хочет создавать свои курсы и делиться своими знаниями с другими. Мы стремимся создавать сообщество людей, которые развиваются вместе и делятся своими успехами. Присоединяйтесь к нашему сообществу и начните свой путь к успеху уже сегодня!</p></div>
    </div>
  )
}
