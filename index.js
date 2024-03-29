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
//     username: 'nguyen manager',
//     password: '1234567',
//     gender: 'female',
// })
// .then(user=>console.log(user))
// .catch(err=>console.log(err))

// const blog01 = new Blog({
//     title:'News 02',
//     author: '5c8cae3d213dc228b664b968'
// })
// blog01.save()
// .then(blog=>console.log(blog))
// .catch(e=>console.log(e))

//ObjectId("5c8cae3d213dc228b664b968")
// User.findByIdAndDelete('5c8cae3d213dc228b664b968')
// .then(r=>console.log(r))
// .catch(e=>console.log(e))


// insert many
// User.insertMany([
//     {
//         username: 'manager 01',
//         password: 'pw1',
//         gender: 'female',
//     },
//     {
//         username: 'manager 02',
//         password: 'pw2',
//         gender: 'male',
//     },
//     {
//         username: 'teo nguyen',
//         password: 'pw3',
//         gender: 'male',
//     },
//     {
//         username: 'ti nguyen',
//         password: 'pw3',
//         gender: 'male',
//     }
// ])
// .then(r=>console.log(r))
// .catch(e=>console.log(e))


// find, findById, findOne
// User.find()
// .then(r=>console.log(r))
// .catch(e=>console.log(e))

// SELECT username FROM users 
// User.find({username: 'admin 02'},{username:1, _id:0})
// .then(r=>console.log(r))
// .catch(e=>console.log(e))

// User.findOne({username: 'admin 02'},{username:1, _id:0})
// .then(r=>console.log(r))
// .catch(e=>console.log(e))

// User.findById('5c8cb4c3792f222c9faf1f1n')
// .then(r=>console.log(r))
// .catch(e=>console.log(e.message))

// like , in, not in, or

// SELECT * FROM users WHERE username LIKE '%manager%'
// User.find({
//     username: { $regex : /manager/}
// })
// .then(r=>console.log(r))
// .catch(e=>console.log(e))

// SELECT * FROM users WHERE username LIKE 'manager%'
// User.find({
//     username: { $regex : /^manager/}
// })
// .then(r=>console.log(r))
// .catch(e=>console.log(e))

// SELECT * FROM users WHERE username LIKE '%manager'
// User.find({
//     username: { $regex : /manager$/}
// })
// .then(r=>console.log(r))
// .catch(e=>console.log(e))

//  >= > < <= lte
// gte  price >= 12
// User.find({
//     price: { $gte : 12}
// })
// .then(r=>console.log(r))
// .catch(e=>console.log(e))

//ObjectId("5c8cb7d01a70f62ee0b6306a")
// ObjectId("5c8cb7d01a70f62ee0b6306c")

// SELECT * 
// FROM user 
// WHERE id 
// IN('5c8cb7d01a70f62ee0b6306c','5c8cb7d01a70f62ee0b6306a')
// User.find({
//     _id: {$in: ['5c8cb7d01a70f62ee0b6306c','5c8cb7d01a70f62ee0b6306a']}
// })
// .then(r=>console.log(r))
// .catch(e=>console.log(e))

// ORDER BY ACS 1, DESC -1
// User.find().sort({username:1})
// .then(r=>console.log(r))
// .catch(e=>console.log(e))
//.countDocuments()
//LIMIT 0,3   LIMIT 3,4 : position, quantity
// User.find().skip(3).limit(4)
// .then(r=>console.log(r))
// .catch(e=>console.log(e))

//ObjectId("5c8cb9dc2fabf5303279d078")
// User.findByIdAndUpdate('5c8cb9dc2fabf5303279d078',{gender:'male'})
// .then(r=>console.log(r))
// .catch(e=>console.log(e))

// User.findOneAndUpdate({username:'ti nguyen'},{gender:'nam'})
// .then(r=>console.log(r))
// .catch(e=>console.log(e))

User.find({
    username:{
        $regex: /admin/
    }
})
.updateMany({password:'new pw'})
.then(r=>console.log(r))
.catch(e=>console.log(e))