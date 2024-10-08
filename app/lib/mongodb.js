import mongoose from "mongoose";

const connectMongoDB = async()  =>{
    try {
        await mongoose.connect(process.env.DATABASE_URL)
        console.log("connected to mongoDB")
    } catch (error) {
        console.log(error)
    }
}

export default connectMongoDB;