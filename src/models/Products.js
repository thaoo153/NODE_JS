import mongoose from 'mongoose';
import mongoosepaginate from "mongoose-paginate-v2";

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    desc: String
}, {
    versionKey: false, timestamps: true,
})

productSchema.plugin(mongoosepaginate)

export default mongoose.model('Product', productSchema)