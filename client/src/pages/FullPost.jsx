import React from 'react'
import ReactMarkdown from 'react-markdown'
import axios from '../axios.js'

import IconButton from '@mui/material/IconButton'
import { Link, useParams } from 'react-router-dom'
import { Index } from '../components/AddComment'
import { CommentsBlock } from '../components/CommentsBlock'
import { Post } from '../components/Post'
import styles from './FullPost.module.scss'

export const FullPost = () => {
  const { id } = useParams()
  const [data, setData] = React.useState()
  const [isLoading, setIsLoading] = React.useState(true)

  React.useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((res) => {
        setData(res.data)
        setIsLoading(false)
      })
      .catch((err) => {
        console.warn(err)
        alert('Ошибка при полуении статьи')
      })
  }, [])

  if (isLoading) {
    return <Post isLoading={isLoading} />
  }

  if (data.title === 'Программирование на React. Начало.') {
    return (
      <>
        <Post
          id={data._id}
          title={data.title}
          imageUrl={
            data.imageUrl ? `http://localhost:4444/${data.imageUrl}` : ''
          }
          user={data.user}
          createdAt={data.createdAt}
          viewsCount={data.viewsCount}
          commentsCount={3}
          tags={data.tags}
          isFullPost
        >
          <ReactMarkdown children={data.text} />
        </Post>
        <div className={styles.btnTest}>
          <iframe
            width='560'
            height='315'
            src={'https://www.youtube.com/embed/AUbWwzez_Dg'}
            title='Youtube Player'
            frameborder='0'
            allowFullScreen
          />
          <Link to={`/test`}>
            <IconButton color='primary'>Пройти тест</IconButton>
          </Link>
        </div>

        <CommentsBlock
          items={[
            {
              user: {
                fullName: 'Вася Пупкин',
                avatarUrl: 'https://mui.com/static/images/avatar/1.jpg'
              },
              text: 'Это тестовый комментарий!'
            },
            {
              user: {
                fullName: 'Иван Иванов',
                avatarUrl: 'https://mui.com/static/images/avatar/2.jpg'
              },
              text: 'When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top'
            }
          ]}
          isLoading={false}
        >
          <Index />
        </CommentsBlock>
      </>
    )
  }

  return (
    <>
      <Post
        id={data._id}
        title={data.title}
        imageUrl={data.imageUrl ? `http://localhost:4444/${data.imageUrl}` : ''}
        user={data.user}
        createdAt={data.createdAt}
        viewsCount={data.viewsCount}
        commentsCount={3}
        tags={data.tags}
        isFullPost
      >
        <ReactMarkdown children={data.text} />
      </Post>
      <div className={styles.btnTest}>
        <a href='https://online.sberbank.ru/CSAFront/index.do'>
          <IconButton color='primary'>Купить курс</IconButton>
        </a>
      </div>
      <CommentsBlock
        items={[
          {
            user: {
              fullName: 'Вася Пупкин',
              avatarUrl: 'https://mui.com/static/images/avatar/1.jpg'
            },
            text: 'Это тестовый комментарий!'
          },
          {
            user: {
              fullName: 'Иван Иванов',
              avatarUrl: 'https://mui.com/static/images/avatar/2.jpg'
            },
            text: 'When displaying three lines or more, the avatar is not aligned at the top. You should set the prop to align the avatar at the top'
          }
        ]}
        isLoading={false}
      >
        <Index />
      </CommentsBlock>
    </>
  )
}
