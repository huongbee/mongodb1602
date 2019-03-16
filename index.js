const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/mean1602', {
    useNewUrlParser: true,
    useCreateIndex: true
})
mongoose.connection
.then(()=>console.log('DB conected!'))
.catch(err=>console.log(err));

const UserSchema = require('./models/User')
const User = mongoose.model('user',UserSchema)

const BlogSchema = require('./models/Blog')
const Blog = mongoose.model('blog',BlogSchema)

//insert 1
// User.create({
//     username: 'admin',
//     password: '1234567',
//     gender: 'female',
// })
// .then(user=>console.log(user))
// .catch(err=>console.log(err))

const blog01 = new Blog({
    title:'News 02',
    author: '5c8cae3d213dc228b664b968'
})
blog01.save()
.then(blog=>console.log(blog))
.catch(e=>console.log(e))

//ObjectId("5c8cae3d213dc228b664b968")

