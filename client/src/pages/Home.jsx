import { TextField } from '@mui/material'
import Grid from '@mui/material/Grid'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { CommentsBlock } from '../components/CommentsBlock'
import { Post } from '../components/Post'
import { TagsBlock } from '../components/TagsBlock'
import { fetchPosts, fetchTags } from '../redux/slices/posts'

export const Home = () => {
  const dispatch = useDispatch()
  const { posts, tags } = useSelector((state) => state.posts)
  const userData = useSelector((state) => state.auth.data)
  const [searchQuery, setSearchQuery] = React.useState('')
  const isPostsLoading = posts.satus === 'loading'
  const isTagsLoading = tags.satus === 'loading'
  

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value)
    console.log(searchQuery)
  }

  React.useEffect(() => {
    dispatch(fetchPosts())
    dispatch(fetchTags())
  }, [])

  const filteredPosts = posts.items.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <>
      <TextField
        id='standard-basic'
        label='Поиск курсов'
        variant='standard'
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <Grid container spacing={4}>
        <Grid xs={8} item>
          {(isPostsLoading ? [...Array(5)] : filteredPosts).map(
            (post, index) => (
              <Post
                key={index}
                id={post._id}
                title={post.title}
                imageUrl={
                  post.imageUrl ? `http://localhost:4444/${post.imageUrl}` : ''
                }
                user={post.user}
                createdAt={post.createdAt}
                viewsCount={post.viewsCount}
                commentsCount={3}
                tags={post.tags}
                isEditable={userData?._id === post.user._id}
              />
            )
          )}
        </Grid>
        <Grid xs={4} item>
          <TagsBlock items={tags.items} isLoading={isTagsLoading} />
          <CommentsBlock
            items={[
              {
                user: {
                  fullName: 'Вася Пупкин',
                  avatarUrl: 'https://mui.com/static/images/avatar/1.jpg'
                },
                text: 'Это тестовый комментарий'
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
          />
        </Grid>
      </Grid>
    </>
  )
}
