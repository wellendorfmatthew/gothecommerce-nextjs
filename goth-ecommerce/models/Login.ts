import  mongoose from 'mongoose';
import { Schema } from 'mongoose';
import NextClothes from './Clothes';

const loginSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  wishList: [
    {
      item: {
        name: String,
        id: String,
        image: String,
        price: Number,
      },
    },
  ],
  orders: [
    {
      order: [
        {
          id: Number,
          date: {
            type: Date,
            default: Date.now,
          },
          image: String,
          name: String,
          price: Number,
          quantity: Number,
        },
      ],
      totalPrice: Number,
    },
  ],
  profilePicture: {
    type: String,
  },
});

const NextLogin = mongoose.models.NextLogin || mongoose.model("NextLogin", loginSchema);
export default NextLogin;
