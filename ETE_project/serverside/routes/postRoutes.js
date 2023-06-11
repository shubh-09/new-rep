const express = require('express');
const router1 = express.Router();
const bodyParser = require('body-parser');
const path = require("path");
const multer = require("multer");
const postController = require("../controllers/postController");
const authuser = require("../middleware/userAuth");
// const {createPost,   upadatePost,   deletePost,   getAllPost,} = require("../controllers/postController");



// creating multer storage
const storage1 = multer.diskStorage({
    destination:(req,filename,callback)=>{
        callback(null,path.join(__dirname,'../publicpostimages'),(err,pass)=>{if(err){console.log("yeaah error ");}});
    },
    filename:(req,filename,callback)=>{
        const name = Date.now() + filename.originalname;
        callback(null,name,(err,pass)=>{if(err){console.log("yeaah error ");}})
    }
});
const upload = multer({storage:storage1});

// routes

router1.post('/create',upload.single("image"),postController.createPost);

router1.put("/update/:id",postController.upadatePost);
router1.delete("/:id",postController.deletePost);
// router1.get("/posts/:id",postController.getAllPost);
router1.get("/posts/all",postController.getAll);
router1.get('/posts/image/:filename', (req, res) => {
    const filename = req.params.filename;
    const imagePath = path.join(__dirname, '../publicpostimages', filename);
    res.sendFile(imagePath);
  });


module.exports = router1;  


// blogRouter.get(*/", getAllBlogs);
//  blogRouter post("/add", addBlog);
//  blogRouter .put("/update/:id", updateBlog);
//  blogRouter get("/:id", getById);
//  blogRouter .delete("/:id", deleteBlog);





// const express = require('express');
// const router1 = express.Router();
// const bodyParser = require('body-parser');
// const path = require("path");
// const multer = require("multer");
// const postController = require("../controllers/postController");



// // creating multer storage
// const storage1 = multer.diskStorage({
//     destination:(req,filename,callback)=>{
//         callback(null,path.join(__dirname,'../public/postimages'),(err,pass)=>{if(err){console.log("yeaah error ");}});
//     },
//     filename:(req,filename,callback)=>{
//         const name = Date.now()+ ":>" + filename.originalname;
//         callback(null,name,(err,pass)=>{if(err){console.log("yeaah error ");}})
//     }
// });
// const upload = multer({storage:storage1});

// router1.post('/createpost', upload.single("image"),postController.createPost);

// router1.get("/",(req,res)=>{
//     console.log("for post creating");
//     res.send(bodyParser.json);
// })

// module.exports = router1; 