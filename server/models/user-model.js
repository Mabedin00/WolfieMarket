const mongoose = require('mongoose')
const Schema = mogoose.Schema
const ObjectId = Schema.Types.ObjectId

const UserSchema = new Schema(
    {
        id: { type: Number, required: true },
        username: { type: String, required: true },
        pass: { type: String, required: true },
        items: { type: [String] },
        services: { type: [String] },
        rating: { type: Number },
        reviews: { type: [String] },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('User', UserSchema)