import Head from "next/head";
import { GetStaticProps } from "next";

import ListPosts from "../components/ListPosts";
import PostCard from "../components/PostCard";
import { getAllPosts, Post } from "./api/posts";

export default function Home({ posts }: any) {
  return (
    <>
      <Head>
        <title>Rafael Campos de Bastiani - Blog</title>
      </Head>

      <ListPosts>
        {posts.map(({ slug, title, description }: Post) => (
          <PostCard {...{ slug, title, description }} key={slug} />
        ))}
      </ListPosts>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const posts = await getAllPosts();

  return {
    props: {
      posts,
    },
  };
};
