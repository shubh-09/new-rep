const mongoose = require(`mongoose`);

const postSchema = mongoose.Schema({
    title: {
        type: String,
        trim:true,
    },
    subtitle: {
        type:String
    },
    category: {
        type:String
    },
    body: {
       type: String
    },
    image: {
        type: String,
        required: true
      },
    User:{
        type:mongoose.Types.ObjectId,
        ref:`user`,
        required:true,
    }
});

module.exports = mongoose.model("post",postSchema);