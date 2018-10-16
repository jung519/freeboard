var mongoose = require('mongoose');


/* board-list */
const BoardListSchema = new mongoose.Schema({
    b_code: String,
    b_title: String,
    del_yn: String,
    regist_date : Date,
    updated_date: { type: Date, default: Date.now },
},{
    collection : "board_list"
});
module.exports = mongoose.model('BoardList', BoardListSchema);


/* board-detail */
const BoardDetailSchema = new mongoose.Schema({
    b_code: String,
    b_title: String,
    title: String,
    content: String,
    id_code: String,
    password: String,
    counter:{ type: Number, default: 0 },
    del_yn: String,
    regist_date : Date,
    updated_date: { type: Date, default: Date.now },
},{
    collection : "board_detail"
});
module.exports = mongoose.model('BoardDetail', BoardDetailSchema);
