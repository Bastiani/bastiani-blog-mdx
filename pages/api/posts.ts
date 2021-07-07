export type Post = {
  slug: string;
  title: string;
  description: string;
};
export async function getAllPosts() {
  // @ts-ignore
  const context = require.context("../posts", false, /\.mdx$/);
  const posts: Array<Post> = [];

  for (const key of context.keys()) {
    const post = key.slice(2);
    const content = await import(`../posts/${post}`);
    const { title, description } = content.meta;

    posts.push({
      slug: post.replace(".mdx", ""),
      title,
      description,
    });
  }

  return posts;
}

// export async function getPostBySlug(slug: any) {
//   const fileContent = await import(`../posts/${slug}.mdx`);

//   const baseUrl =
//     process.env.NODE_ENV === "development"
//       ? "http://localhost:3000"
//       : "https://youtube-serverless-thumb-generator.vercel.app";

//   // const meta = matter(fileContent.default);
//   // const content = marked(meta.content);

//   const thumbnailUrl = `${baseUrl}/api/thumbnail.png?title=${
//     meta.data.title
//   }&thumbnail_bg=${encodeURIComponent(meta.data.thumbnail_bg)}`;

//   return {
//     title: meta.data.title,
//     description: meta.data.description,
//     thumbnailUrl,
//     content,
//   };
// }
