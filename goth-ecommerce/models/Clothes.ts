import mongoose from 'mongoose';
import { Schema } from 'mongoose';

const ClothesSchema = new Schema({ // Creates a schema that will be used create clothes products
    image: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    clothing_type: {
        type: String,
        required: true
    }
})

const NextClothes = mongoose.models.NextClothes || mongoose.model('NextClothes', ClothesSchema);

export default NextClothes;