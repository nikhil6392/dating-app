import mongoose from "mongoose";
const cardSchema =new mongoose.Schema({
    name: String,
    imgUrl: String
})

export default mongoose.model('cards', cardSchema)