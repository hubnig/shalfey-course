import PostModel from '../models/Post.js'

export const getLastTags = async (req, res) => {
  try {
    const posts = await PostModel.find().limit(5).exec()

    const tags = posts.map(obj => obj.tags).flat().slice(0, 5)

    res.json(tags)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Не удалось создать пост'
    })
  }
}
export const getPostTag = async (req, res) => {
  try {
    const tag = req.params.tag
    const posts = await PostModel.find({tags:tag}).populate('user')
    res.json(posts)

  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Не удалось создать пост'
    })
  }
}

export const create = async (req, res) => {
  try {
    const doc = new PostModel({
      title: req.body.title,
      text: req.body.text,
      imageUrl: req.body.imageUrl,
      tags: req.body.tags.split(','),
      user: req.userId
    })

    const post = await doc.save()
    res.json(post)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Не удалось создать пост'
    })
  }
}

export const getAll = async (req, res) => {
  try {
    const posts = await PostModel.find().populate('user').exec()
    res.json(posts)
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Не удалось получить посты'
    })
  }
}

export const getOne = async (req, res) => {
  try {
    const postId = req.params.id

    PostModel.findOneAndUpdate(
      {
        _id: postId
      },
      {
        $inc: { viewsCount: 1 }
      },
      {
        returnDocument: 'after'
      },
      (err, doc) => {
        if (err) {
          console.log(err)
          return res.status(500).json({
            message: 'Не удалось вернуть пост'
          })
        }
        if (!doc) {
          return res.status(404).json({ message: 'Пост не найден' })
        }
        res.json(doc)
      }
    ).populate('user')
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Не удалось получить пост'
    })
  }
}

export const remove = async (req, res) => {
  try {
    const postId = req.params.id

    PostModel.findOneAndDelete(
      {
        _id: postId
      },
      (err, doc) => {
        if (err) {
          console.log(err)
          return res.status(500).json({
            message: 'Не удалось удалить пост'
          })
        }
        if (!doc) {
          return res.status(404).json({ message: 'Пост не найден' })
        }
        res.json({
          success: true
        })
      }
    )
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Не удалось получить пост'
    })
  }
}

export const update = async (req, res) => {
  try {
    const postId = req.params.id

    await PostModel.updateOne(
      {
        _id: postId
      },
      {
        title: req.body.title,
        text: req.body.text,
        imageUrl: req.body.imageUrl,
        tags: req.body.tags.split(','),
        user: req.userId
      }
    )

    res.json({
      success: true
    })
  } catch (error) {
    console.log(error)
    res.status(500).json({
      message: 'Не удалось обновить пост'
    })
  }
}
