const mongoose = require('mongoose');
const Schema = mongoose.Schema

const PostSchema = new Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    imgUrl: {
        type: String
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    }
},  { timestamps: true })

module.exports = mongoose.model('posts', PostSchema)