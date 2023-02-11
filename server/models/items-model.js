const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ItemsSchema = new Schema(
    {
        id: { type: Number }
    }
)