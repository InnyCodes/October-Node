import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Title is Required"],
        minLength:[3, "title must not be less than 3 character"],
        maxLength:[120, "title must not be more than 120 character"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Description is Required"],
        minLength:[10, "title must not be less than 10 character"],
        maxLength:[300, "title must not be more than 300 character"],
        trim: true,
    },
    price:{
        type: Number,
        required: [true, "Price is Required"],
        min: [100, "Price cannot be less than 100"],
        max: [1000000, "Price cannot be Greater than 100000"]
    },
    image: {
        type: String,
        required: true,
    },
    imageId: {
        type: String,
        required: true,
    },
    stock: {
        type:Number,
        required: true,
        default:1,
        min: [1, "stock cannot be less than 1"],
        max: [1000, "Price cannot be Greater than 1000"]
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
    }
})

const product = mongoose.model("product", productSchema);
export default product;
