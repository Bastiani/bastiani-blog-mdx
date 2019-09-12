import { Document, model, Schema } from 'mongoose';

type PostListInterface = {
  description: string;
  image: string;
  title: string;
  url: string;
  active: boolean;
} & Document;

const PostListSchema = new Schema<PostListInterface>(
  {
    image: {
      type: String,
    },
    url: {
      type: String,
      trim: true,
      required: true,
      index: true,
    },
    title: {
      type: String,
      trim: true,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      required: true,
    },
    active: {
      type: Boolean,
      default: true,
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt',
    },
    collection: 'PostList',
  },
);

export default model<PostListInterface>('PostList', PostListSchema);
