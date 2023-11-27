import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import multer from 'multer'

import { PostController, UserController } from './controllers/index.js'
import { checkAuth, handleValidationErrors } from './utils/index.js'
import {
	loginValidation,
	postCreateValidation,
	registerValidation,
} from './validations.js'

mongoose.set('strictQuery', false)
mongoose
	.connect(
		'mongodb+srv://admin:admin@cluster0.2rxcftk.mongodb.net/blog?retryWrites=true&w=majority',
	)
	.then(() => console.log('DB ok'))
	.catch(err => console.log('DB error\n', err))

const PORT = 4444
const app = express()

const storage = multer.diskStorage({
	destination: (_, __, cb) => {
		cb(null, 'uploads')
	},
	filename: (_, file, cb) => {
		cb(null, file.originalname)
	},
})

const upload = multer({ storage })

app.use(express.json())
app.use('/uploads', express.static('uploads'))
app.use(cors())

app.post(
	'/auth/login',
	loginValidation,
	handleValidationErrors,
	UserController.login,
)
app.post(
	'/auth/register',
	registerValidation,
	handleValidationErrors,
	UserController.register,
)
app.get('/auth/me', checkAuth, UserController.getMe)

app.get('/tags', PostController.getLastTags)
app.get('/tags/:tag', PostController.getPostTag)

app.get('/posts', PostController.getAll)
app.get('/posts/:id', PostController.getOne)
app.post(
	'/posts',
	checkAuth,
	postCreateValidation,
	handleValidationErrors,
	PostController.create,
)
app.delete('/posts/:id', checkAuth, PostController.remove)
app.patch(
	'/posts/:id',
	checkAuth,
	postCreateValidation,
	handleValidationErrors,
	PostController.update,
)

app.post('/upload', checkAuth, upload.single('image'), (req, res) => {
	res.json({
		url: `uploads/${req.file.originalname}`,
	})
})

app.listen(PORT, error => {
	if (error) {
		return console.log(error)
	}
	console.log('Server OK')
})
