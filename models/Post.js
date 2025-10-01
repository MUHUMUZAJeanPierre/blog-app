import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true 
},
  subTitle: { 
    type: String, 
    required: true 
},
  Description: { 
    type: String, 
    required: true 
},
}, { 
    timestamps: true 
});

const Post = mongoose.model("Post", postSchema);

export default Post;
