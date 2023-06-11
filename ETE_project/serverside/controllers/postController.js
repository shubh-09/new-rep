const post = require("../models/postModel");
// const posts = require("../models/postModel");
// title: req.body.title,
//             subtitle :req.body.subtitle,
//             category:req.body.category,
//             body:req.body.body,
//             image: req.file.filename,
//             createdUser:req.body.createdUser,
//             date: req.body.date,
const createPost = async (req,res)=>{
    console.log("yeah in create post");
    try {
        const { title,subtitle,category,body, userId } = req.body;
        const image =  req.file.filename;
       console.log("send above ");
        const posts = new post ({
            title,
            subtitle,
            category,
            body,
            image,
            User: userId,
        
        });
       const postData = await posts.save();
       res.status(200).send({sucess:true,msg:"post data",data: postData});
       console.log("send ");

        
    } catch (error) {
        res.status(400).send({sucess: false ,msg:error.message});
        console.log(error);
    }
}

const upadatePost = async (req,res,next)=>{
    console.log("yeah in updatepost");
    try {
        const { postId } = req.params;
        const { title, date, image } = req.body;
        const updatedPost = await Post.findByIdAndUpdate(
            postId,
            { title, date, image },
            { new: true }
          );

        //   res.json(updatedPost);
          res.status(200).send({sucess:true,msg:"post data",updatedposts: updatedPost});
        
    } catch (error) {
        res.status(400).send({succes:false , msg:error.msg});
        console.log(error);
    }
}

const deletePost = async (req,res,next)=>{
    console.log("yeah in deletepost");
    const id = req.params.id;
    try {
        const posts =  await post.findByIdAndDelete(id);
        res.status(200).send({succes:true , msg:`deleted post of ${id}`})
        
    } catch (error) {
        res.status(400).send({succes:false , msg:error.msg});
        console.log(error);
    }
}

const getAllPost = async (req,res,next)=>{
    console.log("yeah in getAllPost");
    const id = req.params.id;

    try {
        const posts = await post.findById(id);
    console.log("yeah in try");
    console.log({posts});


        res.status(201).send({
            succes:true , msg:"all  posts",posts
        })
        
    } catch (error) {
        res.status(400).send({succes:false , msg:error.message});
        console.log(error);
        
    }
}

const getAll = async (req,res,next)=>{
    console.log("yeah in getAll 1");
    const id = req.params.id;

    try {
        const posts = await post.find()
        res.send(posts);
    } catch (e) {
        console.log(e);
        res.status(500).send();
    }
}
 

module.exports = {
    createPost,
    upadatePost,
    deletePost,
    getAllPost,
    getAll,

};




// const posts = require("../models/postModel");

// const createPost = async (req,res)=>{
//     console.log("oh yeah");
//     try {
//         const post = new posts ({
//             title: req.body.title,
//             subtitle :req.body.subtitle,
//             category:req.body.category,
//             body:req.body.body,
//             image: req.file.filename,
//             createdUser:req.body.createdUser,
//             date: req.body.date,
//         });
//        const postData = await post.save();
//        res.status(200).send({sucess:true,msg:"post data",data: postData});
//        console.log("send ");

        
//     } catch (error) {
//         res.status(400).send({sucess: false ,msg:error.message});
//         console.log("error " + error);
//     }
// }

// module.exports = {
//     createPost,
// };
