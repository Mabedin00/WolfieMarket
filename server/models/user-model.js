const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

const UserSchema = new Schema(
    {
        username: { type: String, required: true },
        password: { type: String, required: true },
        items: { type: [ObjectId] },
        services: { type: [ObjectId] },
        rating: { type: Number },
        reviews: {
            type: [{
                comment: { type: String },
                username: { type: String }
            }]
        },
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        email: { type: String, required: true }
    },
    { timestamps: true },
)

module.exports = mongoose.model('User', UserSchema)