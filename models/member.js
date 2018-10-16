var mongoose = require('mongoose');

/* member */
const MemberSchema = new mongoose.Schema({
    id_code: String,
    email: String,
    password: String,
    name: String,
    del_yn: {type:String, default : "n"},
    regist_date: Date,
    updated_date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Member', MemberSchema);