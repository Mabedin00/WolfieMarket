const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ServicesSchema = new Schema(
    {
        id: { type: Number, required: true },
        name: { type: String, required: true },
        description: { type: String, required: true },
        rating: { type: Number },
        reviews: {
            type: [{
                comment: { type: String },
                username: { type: String }
            }]
        },
        price: { type: Number, required: true },
        picture: { type: String, required: true },
        location: { type: String, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('Services', ServicesSchema)