var mongoose = require('mongoose');

/* comment */
const CommentSchema = new mongoose.Schema({
    target_id: String,
    counter: { type: Number, default: 1 },
    commentContent: String,
    comment_id_code: String,
    comment_password: String,
    regist_date: { type: Date, default: Date.now },
}, {
        collection: "comment"
    });
module.exports = mongoose.model('Comment', CommentSchema);