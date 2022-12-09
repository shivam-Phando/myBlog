const mongoose = require('mongoose')
const commentSchema = new mongoose.Schema({
    comment:{
        type:String,
    },
    post:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Post"
    }

})
const Comment = mongoose.model('Comment',commentSchema);
module.exports = Comment;