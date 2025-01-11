import mongoose from "mongoose";

const postSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        image: {
            type : string,
            required: true,
        },
        like: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Users"
            }
        ],
        comment: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Comments"
        },
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users"
        }

    },
    {
        timestamps: true,
    }
);

export default mongoose.model("Post", postSchema);