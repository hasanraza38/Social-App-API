import mongoose from "mongoose";

const commentSchema = new mongoose.Schema(
    {
        postID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post"
        },
        userID: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Users"
        },
        text: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

export default mongoose.model("Comments", commentSchema);