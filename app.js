const express = require('express');
const app = express();
const PORT = 3000;
const multer = require('multer');
const update = multer();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/', (req, res) => {
    res.render('blog');
});

let arrayBlog=[];
 app.post('/blog',update.none(),(req, res) => {
     const blog = {
         title: req.body.blog,
     }
     arrayBlog.unshift(blog);
     console.log(arrayBlog)
     res.render('views',{data: arrayBlog});
 })

app.listen(PORT,()=>{
    console.log('listening on port'+ PORT);
})
